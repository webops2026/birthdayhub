-- BirthdayHub Database Schema
-- Created: 2026-01-11

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Birthstones Table
CREATE TABLE IF NOT EXISTS birthstones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  day INTEGER CHECK (day >= 1 AND day <= 31), -- NULL for monthly stones
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  meaning_ja TEXT[] NOT NULL DEFAULT '{}',
  meaning_en TEXT[] NOT NULL DEFAULT '{}',
  origin_ja TEXT,
  origin_en TEXT,
  image_url TEXT,
  color TEXT, -- HEX color code
  hardness DECIMAL(3, 1), -- Mohs hardness
  price_range TEXT,
  like_count INTEGER NOT NULL DEFAULT 0,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_birthstones_month ON birthstones(month);
CREATE INDEX IF NOT EXISTS idx_birthstones_month_day ON birthstones(month, day);

-- Birthflowers Table
CREATE TABLE IF NOT EXISTS birthflowers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  day INTEGER NOT NULL CHECK (day >= 1 AND day <= 31),
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  meaning_ja TEXT[] NOT NULL DEFAULT '{}', -- Flower language
  meaning_en TEXT[] NOT NULL DEFAULT '{}',
  origin_ja TEXT,
  origin_en TEXT,
  image_url TEXT,
  season TEXT, -- spring, summer, autumn, winter
  color TEXT[], -- Multiple colors possible
  like_count INTEGER NOT NULL DEFAULT 0,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_birthflowers_month_day ON birthflowers(month, day);

-- Birthcolors Table
CREATE TABLE IF NOT EXISTS birthcolors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  day INTEGER NOT NULL CHECK (day >= 1 AND day <= 31),
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  hex TEXT NOT NULL, -- HEX color code
  rgb TEXT NOT NULL, -- RGB format
  meaning_ja TEXT,
  meaning_en TEXT,
  personality_ja TEXT,
  personality_en TEXT,
  like_count INTEGER NOT NULL DEFAULT 0,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_birthcolors_month_day ON birthcolors(month, day);

-- Comments Table (UGC)
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL CHECK (type IN ('birthstone', 'birthflower', 'birthcolor')),
  target_id UUID NOT NULL, -- References the specific item
  content TEXT NOT NULL,
  anonymous_id TEXT NOT NULL, -- Browser fingerprint or generated ID
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_comments_target ON comments(type, target_id);
CREATE INDEX IF NOT EXISTS idx_comments_approved ON comments(is_approved);

-- Reminders Table
CREATE TABLE IF NOT EXISTS reminders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  anonymous_id TEXT NOT NULL,
  name TEXT NOT NULL, -- Name of the person
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  day INTEGER NOT NULL CHECK (day >= 1 AND day <= 31),
  notify_days_before INTEGER NOT NULL DEFAULT 7,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_reminders_anonymous ON reminders(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_reminders_date ON reminders(month, day);

-- Updated timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_birthstones_updated_at BEFORE UPDATE ON birthstones
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_birthflowers_updated_at BEFORE UPDATE ON birthflowers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_birthcolors_updated_at BEFORE UPDATE ON birthcolors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
-- Enable RLS
ALTER TABLE birthstones ENABLE ROW LEVEL SECURITY;
ALTER TABLE birthflowers ENABLE ROW LEVEL SECURITY;
ALTER TABLE birthcolors ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminders ENABLE ROW LEVEL SECURITY;

-- Public read access for main content tables
CREATE POLICY "Public read access for birthstones" ON birthstones
  FOR SELECT USING (true);

CREATE POLICY "Public read access for birthflowers" ON birthflowers
  FOR SELECT USING (true);

CREATE POLICY "Public read access for birthcolors" ON birthcolors
  FOR SELECT USING (true);

-- Comments: public read (approved only), authenticated insert
CREATE POLICY "Public read approved comments" ON comments
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Anyone can insert comments" ON comments
  FOR INSERT WITH CHECK (true);

-- Reminders: user can only access their own
CREATE POLICY "Users can access own reminders" ON reminders
  FOR ALL USING (true);

-- Sample data for birthstones (monthly)
INSERT INTO birthstones (month, name_ja, name_en, meaning_ja, meaning_en, color) VALUES
(1, 'ガーネット', 'Garnet', ARRAY['真実', '友愛', '忠実'], ARRAY['Truth', 'Friendship', 'Loyalty'], '#9B1B30'),
(2, 'アメジスト', 'Amethyst', ARRAY['誠実', '心の平和', '高貴'], ARRAY['Sincerity', 'Peace of Mind', 'Nobility'], '#9966CC'),
(3, 'アクアマリン', 'Aquamarine', ARRAY['沈着', '勇敢', '聡明'], ARRAY['Composure', 'Courage', 'Intelligence'], '#7FFFD4'),
(4, 'ダイヤモンド', 'Diamond', ARRAY['永遠の絆', '純潔', '不屈'], ARRAY['Eternal Bond', 'Purity', 'Invincibility'], '#B9F2FF'),
(5, 'エメラルド', 'Emerald', ARRAY['幸運', '幸福', '希望'], ARRAY['Fortune', 'Happiness', 'Hope'], '#50C878'),
(6, 'パール・ムーンストーン', 'Pearl / Moonstone', ARRAY['健康', '長寿', '富'], ARRAY['Health', 'Longevity', 'Wealth'], '#F0EAD6'),
(7, 'ルビー', 'Ruby', ARRAY['情熱', '仁愛', '威厳'], ARRAY['Passion', 'Benevolence', 'Dignity'], '#E0115F'),
(8, 'ペリドット', 'Peridot', ARRAY['夫婦の幸福', '和合', '希望'], ARRAY['Marital Happiness', 'Harmony', 'Hope'], '#E6E200'),
(9, 'サファイア', 'Sapphire', ARRAY['慈愛', '誠実', '徳望'], ARRAY['Charity', 'Sincerity', 'Virtue'], '#0F52BA'),
(10, 'オパール・トルマリン', 'Opal / Tourmaline', ARRAY['歓喜', '安楽', '忍耐'], ARRAY['Joy', 'Comfort', 'Patience'], '#A8C3BC'),
(11, 'トパーズ・シトリン', 'Topaz / Citrine', ARRAY['友情', '希望', '潔白'], ARRAY['Friendship', 'Hope', 'Purity'], '#FFC87C'),
(12, 'ターコイズ・タンザナイト', 'Turquoise / Tanzanite', ARRAY['成功', '繁栄', '健康'], ARRAY['Success', 'Prosperity', 'Health'], '#40E0D0')
ON CONFLICT DO NOTHING;

COMMENT ON TABLE birthstones IS 'Birthstones for each month (and optionally each day)';
COMMENT ON TABLE birthflowers IS 'Birth flowers for each day of the year';
COMMENT ON TABLE birthcolors IS 'Birth colors for each day of the year';
COMMENT ON TABLE comments IS 'User-generated comments on birthstones, flowers, and colors';
COMMENT ON TABLE reminders IS 'Birthday reminders for users';

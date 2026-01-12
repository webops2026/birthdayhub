# BirthdayHub（バースデーハブ）

**誕生日 × あなたの文化** - 誕生日に関する全ての情報を1つに集約したモダンWebサービス

## 📋 概要

BirthdayHubは、誕生石・誕生花・誕生色などのグローバル共通情報に加え、日本版では和暦・厄年・六曜、英語版ではLife Path Number・Moon Signなど、その国の文化に根ざした情報を主役として提供する誕生日ポータルサービスです。

## ✨ 主な機能

### Layer 1: グローバル共通機能
- 💎 誕生石（12ヶ月 + 365日）
- 🌸 誕生花（365日）
- 🎨 誕生色（366日）
- 🎂 年齢計算・早見表
- ⭐ 西洋占星術（12星座）
- 🐉 中国干支（12支）

### Layer 2: 🇯🇵 日本版ローカル機能
- 📅 和暦変換（明治・大正・昭和・平成・令和）
- 🙏 厄年計算（男女別、本厄・前厄・後厄）
- 🌙 六曜（大安・仏滅・先勝・友引・先負・赤口）
- 🌾 二十四節気（立春・夏至・秋分等）
- 🏯 干支（十干十二支の組み合わせ60種）
- 🎏 旧暦の誕生日計算

### Layer 3: 🇺🇸🇬🇧 英語版ローカル機能
- 🔮 Life Path Number（数秘術）
- 🌙 Moon Sign Calculator（月星座）
- ⭐ Rising Sign / Ascendant（上昇星座）
- 🌟 Numerology Chart（数秘術チャート）
- 💐 Victorian Flower Language（ビクトリア朝の花言葉）
- 🍀 Birth Week Stone（週単位の誕生石）

## 🛠 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS + shadcn/ui
- **多言語対応**: next-intl
- **データベース**: Supabase (PostgreSQL)
- **OGP画像生成**: @vercel/og
- **ホスティング**: Vercel
- **広告**: Google AdSense
- **分析**: Google Analytics 4

## 🚀 セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn
- Supabaseアカウント

### インストール

```bash
# 依存関係をインストール
npm install

# 環境変数を設定
cp .env.local.example .env.local
# .env.localにSupabaseの認証情報を設定

# 開発サーバーを起動
npm run dev
```

### Supabaseセットアップ

1. Supabaseプロジェクトを作成
2. `supabase/schema.sql`を実行してデータベーススキーマを作成
3. `.env.local`に以下を設定:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 プロジェクト構造

```
birthdayhub/
├── app/
│   └── [locale]/              # 多言語対応ルーティング
│       ├── layout.tsx
│       ├── page.tsx           # ホームページ
│       ├── birthday/          # 誕生日詳細ページ
│       ├── birthstones/       # 誕生石ページ
│       ├── birthflowers/      # 誕生花ページ
│       ├── birthcolors/       # 誕生色ページ
│       ├── wareki/            # 和暦変換ページ
│       └── yakudoshi/         # 厄年計算ページ
├── components/                # Reactコンポーネント
│   └── ui/                    # shadcn/uiコンポーネント
├── lib/
│   ├── supabase.ts            # Supabaseクライアント
│   ├── birthday-utils.ts      # 誕生日計算ユーティリティ
│   └── utils.ts               # 共通ユーティリティ
├── i18n/
│   ├── request.ts             # next-intl設定
│   └── routing.ts             # ルーティング設定
├── messages/
│   ├── ja.json                # 日本語翻訳
│   └── en.json                # 英語翻訳
├── supabase/
│   └── schema.sql             # データベーススキーマ
└── public/                    # 静的ファイル
```

## 🌐 対応言語

- 🇯🇵 日本語（デフォルト）
- 🇬🇧 英語

将来的には以下の言語も対応予定:
- 🇨🇳 中国語
- 🇮🇳 ヒンディー語
- 🇪🇸 スペイン語
- 🇸🇦 アラビア語

## 📊 収益モデル

- Google AdSense
- ジュエリーアフィリエイト（誕生石）
- 花の通販アフィリエイト（誕生花）
- ギフトアフィリエイト

## 🔒 セキュリティ

- Row Level Security (RLS)による適切なアクセス制御
- 匿名ユーザーのコメント投稿に対するスパム対策
- NGワードフィルタによる不適切投稿のブロック

## 📈 目標KPI（3年目）

- 月間PV: 180万
- 月間ユニークユーザー: 60万
- 月間収益: 121万円

## 🎨 UI/UX 設計方針

### 誕生日入力のリアルタイム更新 + SEO両立

ユーザー体験とSEOを両立させるため、以下の設計を採用：

```
┌─────────────────────────────────────────────────────────────┐
│  ユーザー体験                                                │
├─────────────────────────────────────────────────────────────┤
│  1. フォームに誕生日を入力（年/月/日）                        │
│  2. ボタンを押さずにリアルタイムで画面が更新される             │
│  3. 同時にURLも自動で更新（history.replaceState）            │
│     例: /ja → /ja/birthday/1996/01/12                       │
│  4. ページ遷移なし、スムーズなUX                              │
└─────────────────────────────────────────────────────────────┘
```

#### 技術的実装

- **リアルタイム更新**: React stateによる即時反映
- **URL更新**: `history.replaceState` または Next.js `router.replace({ shallow: true })`
- **状態保持**: localStorage で誕生日を保存、全ページで維持
- **ヘッダー表示**: 入力された日付をヘッダーに常時表示

#### SEOメリット

- 各日付ページ（`/birthday/YYYY/MM/DD`）がインデックス可能
- シェアボタンで日付付きURLを共有可能
- OGP画像も日付ごとに動的生成
- ロングテールSEO（「1月12日 誕生石」等）で流入獲得

#### コンポーネント構成

```
Header（全ページ共通）
├── ロゴ（BirthdayHub）
├── 日付表示（1996.01.12）← localStorageから取得、リアルタイム更新
├── ナビゲーション（誕生石/誕生花/誕生色）
└── 言語切替（JA/EN）

HomePage
└── BirthdayForm（年/月/日のセレクト）
    ├── onChange → React state更新 → 画面リアルタイム更新
    ├── onChange → localStorage保存
    └── onChange → history.replaceState でURL更新
```

## 📄 ライセンス

© 2026 BirthdayHub. All rights reserved.

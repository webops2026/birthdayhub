import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types will be generated from Supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      birthstones: {
        Row: {
          id: string
          month: number
          day: number | null
          name_ja: string
          name_en: string
          meaning_ja: string[]
          meaning_en: string[]
          origin_ja: string | null
          origin_en: string | null
          image_url: string | null
          color: string | null
          hardness: number | null
          price_range: string | null
          like_count: number
          view_count: number
          created_at: string
        }
        Insert: {
          id?: string
          month: number
          day?: number | null
          name_ja: string
          name_en: string
          meaning_ja: string[]
          meaning_en: string[]
          origin_ja?: string | null
          origin_en?: string | null
          image_url?: string | null
          color?: string | null
          hardness?: number | null
          price_range?: string | null
          like_count?: number
          view_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          month?: number
          day?: number | null
          name_ja?: string
          name_en?: string
          meaning_ja?: string[]
          meaning_en?: string[]
          origin_ja?: string | null
          origin_en?: string | null
          image_url?: string | null
          color?: string | null
          hardness?: number | null
          price_range?: string | null
          like_count?: number
          view_count?: number
          created_at?: string
        }
      }
      birthflowers: {
        Row: {
          id: string
          month: number
          day: number
          name_ja: string
          name_en: string
          meaning_ja: string[]
          meaning_en: string[]
          origin_ja: string | null
          origin_en: string | null
          image_url: string | null
          season: string | null
          color: string[]
          like_count: number
          view_count: number
          created_at: string
        }
        Insert: {
          id?: string
          month: number
          day: number
          name_ja: string
          name_en: string
          meaning_ja: string[]
          meaning_en: string[]
          origin_ja?: string | null
          origin_en?: string | null
          image_url?: string | null
          season?: string | null
          color?: string[]
          like_count?: number
          view_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          month?: number
          day?: number
          name_ja?: string
          name_en?: string
          meaning_ja?: string[]
          meaning_en?: string[]
          origin_ja?: string | null
          origin_en?: string | null
          image_url?: string | null
          season?: string | null
          color?: string[]
          like_count?: number
          view_count?: number
          created_at?: string
        }
      }
      birthcolors: {
        Row: {
          id: string
          month: number
          day: number
          name_ja: string
          name_en: string
          hex: string
          rgb: string
          meaning_ja: string | null
          meaning_en: string | null
          personality_ja: string | null
          personality_en: string | null
          like_count: number
          view_count: number
          created_at: string
        }
        Insert: {
          id?: string
          month: number
          day: number
          name_ja: string
          name_en: string
          hex: string
          rgb: string
          meaning_ja?: string | null
          meaning_en?: string | null
          personality_ja?: string | null
          personality_en?: string | null
          like_count?: number
          view_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          month?: number
          day?: number
          name_ja?: string
          name_en?: string
          hex?: string
          rgb?: string
          meaning_ja?: string | null
          meaning_en?: string | null
          personality_ja?: string | null
          personality_en?: string | null
          like_count?: number
          view_count?: number
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          type: string
          target_id: string
          content: string
          anonymous_id: string
          is_approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          type: string
          target_id: string
          content: string
          anonymous_id: string
          is_approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          type?: string
          target_id?: string
          content?: string
          anonymous_id?: string
          is_approved?: boolean
          created_at?: string
        }
      }
      reminders: {
        Row: {
          id: string
          anonymous_id: string
          name: string
          month: number
          day: number
          notify_days_before: number
          created_at: string
        }
        Insert: {
          id?: string
          anonymous_id: string
          name: string
          month: number
          day: number
          notify_days_before?: number
          created_at?: string
        }
        Update: {
          id?: string
          anonymous_id?: string
          name?: string
          month?: number
          day?: number
          notify_days_before?: number
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

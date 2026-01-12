# BirthdayHub プロジェクト

## 共通ルール

全ブランド共通のルールは以下を参照：
- **共通開発ルール**: `/root/legacybrands/docs/共通開発ルール.md`

---

## プロジェクト概要

誕生日に関する全ての情報を1つに集約したモダンWebサービス。
誕生石・誕生花・誕生色などのグローバル共通情報に加え、日本版では和暦・厄年・六曜、英語版ではLife Path Number・Moon Signなど、各国の文化に根ざした情報を提供。

## 関連ドキュメント

- 企画書: `/root/legacybrands/docs/企画書_誕生日ポータルサービス.md`
- 戦略計画書: `/root/legacybrands/docs/戦略計画書_レガシーUIリプレイス.md`
- 認証情報: `/root/legacybrands/docs/credentials_legacybrand.md`

## Supabase接続情報

```
URL: https://oipojpaphzcnjurfmemm.supabase.co
```

## コア機能

- 誕生日詳細ページ（統合表示）
- 誕生石一覧・詳細（12ヶ月 + 365日）
- 誕生花一覧・詳細（365日）
- 誕生色一覧・詳細（366日）
- 年齢計算機
- 和暦変換（日本版）
- 厄年計算（日本版）
- Life Path Number（英語版）

## このプロジェクト固有の注意事項

- 多言語対応必須（日本語 + 英語）
- 誕生日データは365日分 + うるう年対応（366日）
- 日本版と英語版でローカル機能が異なる

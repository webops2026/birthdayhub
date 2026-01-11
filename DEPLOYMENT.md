# BirthdayHub デプロイメントガイド

## 📋 デプロイ前チェックリスト

### 1. Supabaseプロジェクト作成

1. [Supabase](https://supabase.com)にアクセス
2. 新しいプロジェクトを作成
   - Organization: `webops2026's org`
   - Project name: `birthdayhub`
   - Database password: 強力なパスワードを設定
   - Region: Northeast Asia (Tokyo) 推奨

3. プロジェクトが作成されたら、以下の情報を取得:
   - Project URL
   - Anon/Public Key

### 2. データベース設定

1. Supabase ダッシュボードの「SQL Editor」を開く
2. `supabase/schema.sql`の内容をコピー&ペースト
3. 「Run」をクリックしてスキーマを作成
4. エラーがないことを確認

### 3. 環境変数設定

`.env.local`ファイルを以下のように設定:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Site
NEXT_PUBLIC_SITE_URL=https://birthdayhub.io
```

## 🚀 Vercelデプロイ

### 1. GitHubリポジトリ作成

```bash
cd /root/legacybrands/birthdayhub

# GitHubリポジトリに接続（まだの場合）
git remote add origin https://github.com/webops2026/birthdayhub.git

# 初回コミット
git add .
git commit -m "Initial commit: BirthdayHub MVP

- Next.js 15 with App Router
- Multi-language support (ja/en) with next-intl
- Supabase integration
- Birthday calculator with Japanese/Western features
- Birthstones, birthflowers, birthcolors
- Wareki (Japanese calendar) converter
- Yakudoshi (unlucky years) calculator
- Life Path Number calculator

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

git branch -M main
git push -u origin main
```

### 2. Vercelプロジェクト作成

1. [Vercel](https://vercel.com)にログイン（GitHub連携: webops2026）
2. 「New Project」をクリック
3. `birthdayhub`リポジトリをインポート
4. 環境変数を設定:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   NEXT_PUBLIC_SITE_URL=https://birthdayhub.io
   ```
5. 「Deploy」をクリック

### 3. ドメイン設定

#### ドメイン取得（推奨: birthdayhub.io）

1. お名前.comまたはCloudflareでドメイン取得
2. Vercelダッシュボードの「Settings」→「Domains」
3. カスタムドメインを追加:
   - `birthdayhub.io`（メイン）
   - `www.birthdayhub.io`（→ birthdayhub.ioへ308リダイレクト）

#### DNS設定

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🗄️ データ投入

### サンプルデータ確認

デプロイ後、`supabase/schema.sql`で投入したサンプルデータが正しく表示されることを確認:

- 誕生石12ヶ月分が表示される
- 誕生日詳細ページで年齢計算、星座、干支が正しく表示される

### 本番データ投入（今後）

365日分の誕生花・誕生色データは、別途AIで生成して投入予定。

## 📊 分析ツール設定

### Google Analytics 4

1. [Google Analytics](https://analytics.google.com)でプロパティ作成
2. 測定ID（G-XXXXXXXXXX）を取得
3. Vercelの環境変数に追加:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. `app/[locale]/layout.tsx`にGAスクリプトを追加

### Google Search Console

1. [Google Search Console](https://search.google.com/search-console)でプロパティ追加
2. ドメイン所有権を確認（Vercelで自動確認される場合が多い）
3. サイトマップを送信: `https://birthdayhub.io/sitemap.xml`

## 🔍 SEO設定

### sitemap.xml生成

Next.js 15のApp Routerでは、`app/sitemap.ts`を作成してサイトマップを自動生成可能。

### robots.txt

`public/robots.txt`を作成:

```
User-agent: *
Allow: /

Sitemap: https://birthdayhub.io/sitemap.xml
```

## 💰 収益化設定（後日）

### Google AdSense

1. Google AdSenseアカウント作成
2. サイト登録・審査
3. 広告ユニット作成
4. コードをサイトに埋め込み

### アフィリエイト

- 楽天アフィリエイト
- Amazonアソシエイト
- A8.net
- バリューコマース

## 🔒 セキュリティチェック

- [ ] Supabase RLSポリシーが正しく設定されている
- [ ] 環境変数が正しく設定されている（漏洩していない）
- [ ] HTTPS通信が有効になっている
- [ ] CSP (Content Security Policy) 設定（必要に応じて）

## 📈 パフォーマンス最適化

- [ ] Vercel Analytics有効化
- [ ] 画像最適化（next/image使用）
- [ ] フォント最適化
- [ ] バンドルサイズチェック

## ✅ デプロイ後確認項目

- [ ] トップページが正しく表示される
- [ ] 日本語/英語の切り替えが動作する
- [ ] 誕生日入力フォームが動作する
- [ ] 誕生日詳細ページが正しく表示される
- [ ] 誕生石・誕生花・誕生色が表示される
- [ ] 和暦変換が正しく動作する
- [ ] 厄年計算が正しく動作する
- [ ] モバイルレスポンシブが正常
- [ ] ページ読み込み速度が良好（Lighthouse 90+）
- [ ] OGP画像が正しく生成される

## 🚨 トラブルシューティング

### ビルドエラー

```bash
# ローカルでビルドテスト
npm run build

# エラー内容を確認して修正
```

### Supabase接続エラー

- 環境変数が正しく設定されているか確認
- Supabase URLとAnon Keyが正しいか確認
- RLSポリシーが適切に設定されているか確認

### 多言語ルーティングエラー

- `middleware.ts`が正しく設定されているか確認
- `i18n/routing.ts`の設定を確認

## 📞 サポート

問題が発生した場合は、Vercel/Supabaseの公式ドキュメントを参照してください。

---

**最終更新**: 2026年1月11日

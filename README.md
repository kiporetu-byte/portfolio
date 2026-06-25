# Portfolio Management App

## 概要

ポートフォリオサイトを管理するためのWebアプリケーションです。

公開ページではプロフィール情報を表示し、管理画面ではログインした管理者のみがプロフィール情報や画像を更新できます。

また、お問い合わせフォームから送信された内容をデータベースへ保存する機能も実装しています。

このアプリは、Next.js・Express.js・Prisma・MySQL を使用したフルスタック開発の学習を目的として制作しました。

---

## 制作目的

フロントエンドとバックエンドを分離した構成のWebアプリケーションを実装し、以下の技術への理解を深めることを目的として制作しました。

- Next.js を用いたフロントエンド開発
- Express.js を用いた REST API 構築
- Prisma を利用したデータベース操作
- MySQL との接続
- 画像アップロード処理
- 認証・認可の実装

---

## 主な機能

- 管理画面ログイン（Firebase Authentication）
- 管理画面への認証制御
- プロフィール登録・更新
- プロフィール画像アップロード
- 公開ページでのプロフィール表示
- お問い合わせフォーム
- お問い合わせ内容のデータベース保存

---

## 使用技術

### フロントエンド

- Next.js
- TypeScript
- Tailwind CSS

### バックエンド

- Express.js
- TypeScript

### データベース

- MySQL
- Prisma ORM

### その他

- Firebase Authentication
- Docker
- Git / GitHub

---

## アーキテクチャ

```
Next.js（Frontend）
        ↓
 Express API
        ↓
   Prisma ORM
        ↓
      MySQL
```

フロントエンドとバックエンドを分離し、REST API を通してデータ通信を行う構成です。

---

## データベース設計

主なテーブル

- Profile（プロフィール情報）
- Contact（お問い合わせ情報）

ER図は `docs` フォルダに保存しています。

---

## API設計

| Method | Endpoint       | 内容                         |
| ------ | -------------- | ---------------------------- |
| GET    | /profile       | プロフィール取得             |
| POST   | /profile       | プロフィール更新             |
| POST   | /profile/image | プロフィール画像アップロード |
| GET    | /profile/image | プロフィール画像取得         |
| POST   | /contact       | お問い合わせ送信             |

---

## ディレクトリ構成

```
app/
├─ admin/
├─ api/
├─ contact/
├─ skills/
├─ works/

backend/
prisma/
docs/
practice/
```

---

## 工夫した点

- フロントエンドとバックエンドを分離した構成
- Prisma による型安全なデータベース操作
- プロフィール画像アップロード機能の実装
- Firebase Authentication を利用した認証制御

---

## 今後の改善

- スキル管理機能の追加
- Works 管理機能の追加
- UI / UX の改善
- 画像ストレージの S3 対応
- NestJS を利用したバックエンド改善

---

## セットアップ

### リポジトリをクローン

```bash
git clone <repository-url>
```

### 依存関係をインストール

```bash
npm install
```

### MySQL を起動

```bash
docker compose up -d
```

### Prisma Migration

```bash
npx prisma migrate dev
```

### 開発サーバーを起動

#### フロントエンド

```bash
npm run dev
```

#### バックエンド

```bash
cd backend
npm run dev
```

# Portfolio Management App

## 概要

ポートフォリオサイトを管理するためのWebアプリケーションです。

公開ページではプロフィール情報を表示し、  
管理画面ではログインした管理者のみがプロフィール情報や画像を更新できます。

また、お問い合わせフォームから送信された内容をデータベースに保存する機能も実装しています。

このアプリは、Next.js・Express.js・Prisma・MySQL を使用した  
フルスタック開発の学習を目的として制作しました。

---

## 制作目的

フロントエンドとバックエンドを分離した構成のWebアプリケーションを実装し、  
以下の技術の理解を深めることを目的として制作しました。

- Next.js を用いたフロントエンド開発
- Express.js を用いたAPI構築
- Prismaによるデータベース操作
- MySQLとの接続
- 画像アップロード処理
- 認証・認可の仕組み

---

## 主な機能

- 管理画面ログイン（Firebase Authentication）
- 管理画面への認証制御
- プロフィール登録 / 更新
- プロフィール画像アップロード
- 公開ページでのプロフィール表示
- お問い合わせフォーム
- 問い合わせ内容のデータベース保存

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
Next.js（フロントエンド）
↓
Express API
↓
Prisma ORM
↓
MySQL


フロントエンドとバックエンドを分離し、  
REST APIを通してデータ通信を行う構成になっています。

---

## データベース設計

主なテーブル

- Profile（プロフィール情報）
- Contact（お問い合わせ情報）

ER図は `docs` フォルダに保存しています。

---

## API設計

| Method | Endpoint | 内容 |
|------|------|------|
| GET | /profile | プロフィール取得 |
| POST | /profile | プロフィール更新 |
| POST | /profile/image | プロフィール画像アップロード |
| GET | /profile/image | プロフィール画像取得 |
| POST | /contact | お問い合わせ送信 |

---

## ディレクトリ構成

フロントエンドとバックエンドを分離し、  
REST APIを通してデータ通信を行う構成になっています。

---

## データベース設計

主なテーブル

- Profile（プロフィール情報）
- Contact（お問い合わせ情報）

ER図は `docs` フォルダに保存しています。

---

## API設計

| Method | Endpoint | 内容 |
|------|------|------|
| GET | /profile | プロフィール取得 |
| POST | /profile | プロフィール更新 |
| POST | /profile/image | プロフィール画像アップロード |
| GET | /profile/image | プロフィール画像取得 |
| POST | /contact | お問い合わせ送信 |

---

## ディレクトリ構成

フロントエンドとバックエンドを分離し、  
REST APIを通してデータ通信を行う構成になっています。

---

## データベース設計

主なテーブル

- Profile（プロフィール情報）
- Contact（お問い合わせ情報）

ER図は `docs` フォルダに保存しています。

---

## API設計

| Method | Endpoint | 内容 |
|------|------|------|
| GET | /profile | プロフィール取得 |
| POST | /profile | プロフィール更新 |
| POST | /profile/image | プロフィール画像アップロード |
| GET | /profile/image | プロフィール画像取得 |
| POST | /contact | お問い合わせ送信 |

---

## ディレクトリ構成
app/
Next.jsのページ

backend/
Express API

prisma/
データベーススキーマ

docs/
設計資料

practice/
学習メモ

---

## 工夫した点

- フロントエンドとバックエンドを分離した構成にしたこと
- Prismaを使用して型安全なデータベース操作を実装したこと
- 画像アップロード機能を実装したこと
- 管理画面への認証制御を実装したこと

---

## 今後の改善

- スキル管理機能の追加
- 実績（Works）管理機能の追加
- UI/UXの改善
- 画像ストレージをS3へ移行
- NestJSによるバックエンド構造改善

---

## セットアップ

### リポジトリをクローン

---

## 工夫した点

- フロントエンドとバックエンドを分離した構成にしたこと
- Prismaを使用して型安全なデータベース操作を実装したこと
- 画像アップロード機能を実装したこと
- 管理画面への認証制御を実装したこと

---

## 今後の改善

- スキル管理機能の追加
- 実績（Works）管理機能の追加
- UI/UXの改善
- 画像ストレージをS3へ移行
- NestJSによるバックエンド構造改善

---

## セットアップ

### リポジトリをクローン

---

## 工夫した点

- フロントエンドとバックエンドを分離した構成にしたこと
- Prismaを使用して型安全なデータベース操作を実装したこと
- 画像アップロード機能を実装したこと
- 管理画面への認証制御を実装したこと

---

## 今後の改善

- スキル管理機能の追加
- 実績（Works）管理機能の追加
- UI/UXの改善
- 画像ストレージをS3へ移行
- NestJSによるバックエンド構造改善

---

## セットアップ

### リポジトリをクローン
git clone <repository-url>


### 依存関係インストール


npm install


### MySQL起動


docker compose up -d


### Prisma migration


npx prisma migrate dev


### 開発サーバー起動

フロントエンド


npm run dev


バックエンド


cd backend
npm run dev
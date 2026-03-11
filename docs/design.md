# Section6 ポートフォリオアプリ 設計書

## 1. アプリ概要

Firebase Authentication を利用した認証機能付きポートフォリオアプリを作成する。  
管理者としてログインしたユーザーのみ管理画面へアクセスでき、プロフィール・実績・スキルを管理できるようにする。  
公開ページでは登録された情報を表示する。

---

## 2. 使用技術

| 種類 | 技術 |
|-----|-----|
| フロントエンド | Next.js (App Router / TypeScript) |
| スタイリング | Tailwind CSS |
| 認証 | Firebase Authentication |
| ORM | Prisma |
| DB | SQLite |
| 開発環境 | Node.js / npm / WSL / GitHub |

---

## 3. 画面一覧

### 公開画面

| URL | 内容 |
|----|----|
| `/` | ポートフォリオトップページ（プロフィール・実績・スキル表示） |

---

### 認証画面

| URL | 内容 |
|----|----|
| `/admin/login` | 管理者ログイン画面 |

---

### 管理画面

| URL | 内容 |
|----|----|
| `/admin` | 管理画面トップ |
| `/admin/profile` | プロフィール管理 |
| `/admin/works` | 実績管理 |
| `/admin/skills` | スキル管理 |

---

### 追加予定

| URL | 内容 |
|----|----|
| `/contact` | 問い合わせフォーム |

---

## 4. 認証・認可設計

### 認証

Firebase Authentication を使用する。

ログイン方式

- Email / Password

---

### 認可

管理画面はログイン済みユーザーのみアクセス可能とする。

未認証ユーザーが/admin配下にアクセスした場合はnotFound()
を実行し **404ページを表示する**

---

## 5. データベース設計

### Profile

| カラム | 型 | 内容 |
|------|------|------|
| id | Int | ID |
| name | String | 名前 |
| bio | String | 自己紹介 |
| imageUrl | String | プロフィール画像 |
| createdAt | DateTime | 作成日時 |
| updatedAt | DateTime | 更新日時 |

---

### Work

| カラム | 型 | 内容 |
|------|------|------|
| id | Int | ID |
| title | String | 実績タイトル |
| description | String | 実績説明 |
| imageUrl | String | 実績画像 |
| createdAt | DateTime | 作成日時 |
| updatedAt | DateTime | 更新日時 |

---

### Skill

| カラム | 型 | 内容 |
|------|------|------|
| id | Int | ID |
| name | String | スキル名 |
| description | String | スキル説明 |
| createdAt | DateTime | 作成日時 |
| updatedAt | DateTime | 更新日時 |

---

## 6. 主な機能

### 認証機能

- Firebase Authentication ログイン
- ログイン後管理画面へ遷移

---

### 認可機能

- 未ログインユーザーは管理画面にアクセス不可
- `/admin` へ直接アクセスした場合は 404 を表示

---

### 管理機能

- プロフィール登録 / 更新
- 実績登録 / 更新
- スキル登録 / 更新
- 画像登録 / 更新

---

### 公開機能

- ポートフォリオ表示
- プロフィール表示
- 実績表示
- スキル表示

---

## 7. 今後実装予定

- 画像アップロード機能
- 問い合わせフォーム
- 管理画面UI改善



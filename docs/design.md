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

未認証ユーザーが

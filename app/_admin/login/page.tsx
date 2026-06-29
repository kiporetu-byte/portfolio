//ログイン画面
"use client";//クライアントコンポーネント宣言 このページはクライアント側（ブラウザ）で動く という宣言

import { FormEvent, useState } from "react";//ReactからFormEvent（フォームのイベントの型）useState（状態管理）を読み込む
import { signInWithEmailAndPassword } from "firebase/auth";//Firebaseの認証機能からメールアドレス＋パスワードでログインする機能を読み込む
import { useRouter } from "next/navigation";//Next.jsのページ遷移機能（ルーター）**を読み込む
import { auth } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
   } catch (error: any) {
  console.error(error);
  setErrorMessage(error.code ?? "ログインに失敗しました");
}
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold">管理者ログイン</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full rounded bg-black px-4 py-2 text-white"
          >
            ログイン
          </button>
        </form>
      </div>
    </main>
  );
}
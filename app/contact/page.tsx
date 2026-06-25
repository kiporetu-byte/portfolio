// 公開用のお問い合わせフォームページ
"use client";

import { FormEvent, useState } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("");

    try {
      const res = await fetch("http://localhost:4000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました");
      }

      setResult("お問い合わせを送信しました");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setResult("送信に失敗しました");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <Header />

      <div className="mx-auto max-w-xl p-6">
        <h1 className="text-2xl font-bold">お問い合わせ</h1>
        <p className="mt-2">お問い合わせフォームです。</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block font-medium">
              名前
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block font-medium">
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
            <label htmlFor="message" className="mb-1 block font-medium">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded border px-3 py-2"
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="rounded bg-black px-4 py-2 text-white"
          >
            送信
          </button>

          {result && <p className="text-sm text-gray-700">{result}</p>}
        </form>
      </div>
    </main>
  );
}

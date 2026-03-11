"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { notFound } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function AdminPage() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <p className="p-6">読み込み中...</p>;
  }

  if (!user) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">管理画面トップ</h1>
      <p className="mt-2">ログイン中のユーザーのみ表示されます。</p>
      <p className="mt-4 text-sm text-gray-600">ログイン中: {user.email}</p>
    </main>
  );
}
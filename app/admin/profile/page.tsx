"use client";

import { FormEvent, useEffect, useState } from "react";

type Profile = {
  id?: number;
  name: string;
  bio: string;
  imageUrl: string;
};

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    bio: "",
    imageUrl: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        const data = await response.json();

        if (data) {
          setProfile({
            name: data.name ?? "",
            bio: data.bio ?? "",
            imageUrl: data.imageUrl ?? "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error("保存に失敗しました");
      }

      setMessage("プロフィールを保存しました");
    } catch (error) {
      console.error(error);
      setMessage("保存に失敗しました");
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">プロフィール管理</h1>
      <p className="mt-2">プロフィールを登録・更新するページです。</p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={profile.name}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="bio" className="mb-1 block font-medium">
            自己紹介
          </label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            rows={5}
            required
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="mb-1 block font-medium">
            画像URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            value={profile.imageUrl}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          保存
        </button>

        {message && <p className="text-sm text-gray-700">{message}</p>}
      </form>
    </main>
  );
}
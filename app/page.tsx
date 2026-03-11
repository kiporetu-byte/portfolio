import { prisma } from "@/lib/prisma";

export default async function Home() {
  const profile = await prisma.profile.findFirst();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">ポートフォリオ</h1>

      {profile && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{profile.name}</h2>

          <p>{profile.bio}</p>

          {profile.imageUrl && (
            <img
              src={profile.imageUrl}
              alt="プロフィール画像"
              className="w-40 rounded"
            />
          )}
        </section>
      )}
    </main>
  );
}

//トップページ本体
//import { prisma } from "@/lib/prisma";
//import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  const profile = {
    name: "Erika Kamimoto",
    bio: "Ms.EngineerでWebアプリ開発を学び、Next.js・TypeScript・Supabaseを用いたアプリ開発に取り組んでいます。現在は個人開発を通して、企画から実装まで一貫して形にする力を伸ばしています。",
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Supabase",
    "Prisma",
  ];

  const works = [
    {
      title: "そなえアレ",
      description:
        "家族構成やアレルギー情報に合わせて、防災備蓄を提案・管理できるチーム開発アプリです。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Stripe",
        "OpenAI API",
      ],
      points: [
        "チーム開発",
        "アレルギー情報を考慮した備蓄提案",
        "決済・AI機能の実装",
      ],
      githubUrl: "https://github.com/kiporetu-byte/sonae-are.git",
      appUrl: "https://sonae-are-production.up.railway.app",
    },
    {
      title: "ごほうび貯金bot",
      description:
        "目標達成や日々の行動に合わせて貯金を記録できるLINE Botアプリです。",
      technologies: ["LINE API", "FastAPI", "Python", "Supabase"],
      points: [
        "LINE上で操作できる",
        "貯金記録の登録",
        "継続しやすい仕組みづくり",
      ],
      githubUrl: "https://github.com/kiporetu-byte/gohoubi-saving-bot.git",
      appUrl: "",
    },
    {
      title: "お気に入り記事投稿サイト",
      description: "気になった記事を投稿・共有できるWebアプリです。",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      points: ["記事の投稿・一覧表示", "認証機能", "シンプルな投稿UI"],
      githubUrl: "https://github.com/kiporetu-byte/work-room-b-portfolio.git",
      appUrl: "",
    },
    {
      title: "家計簿アプリ",
      status: "開発中",
      description:
        "日々の支出を記録し、カテゴリごとに管理できる家計簿アプリです。",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      points: [
        "支出の登録・一覧表示",
        "カテゴリ別の管理",
        "シンプルで使いやすいUI",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <Header />
      <div className="mx-auto max-w-5xl space-y-24">
        {/* Profile */}
        <section className="rounded-none bg-white p-10 shadow-sm md:p-14">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-slate-400">
            FRONTEND / WEB APP
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Erika
            <br />
            Portfolio
          </h1>

          <p className="mb-8  text-lg leading-9 text-slate-600">
            Ms.EngineerでWebアプリ開発を学び、
            <br />
            Next.js・TypeScript・Supabaseを用いた
            <br />
            アプリ開発に取り組んでいます。
            <br />
            <br />
            現在は個人開発を通して、
            <br />
            企画から実装まで一貫して形にする力を伸ばしています。
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/works"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Worksを見る
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:bg-slate-100"
            >
              Contact
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-slate-500">What I use</p>
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>

          <div className="rounded-none border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-6 leading-8 text-slate-600">
              Next.js・TypeScript・Supabaseなどを中心に、Webアプリケーション開発に取り組んでいます。
              <br />
              詳しい使用技術はSkillsページにまとめています。
            </p>

            <a
              href="/skills"
              className="inline-block rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:bg-slate-100"
            >
              Skillsを見る
            </a>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-slate-500">My projects</p>
            <h2 className="text-4xl font-bold">Works</h2>
          </div>

          <div className="rounded-none border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-6 leading-8 text-slate-600">
              これまでに制作したWebアプリケーションやチーム開発の成果物をまとめています。
              <br />
              使用技術や工夫した点もあわせて紹介しています。
            </p>

            <a
              href="/works"
              className="inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              作品一覧を見る
            </a>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-none bg-slate-900 p-10 text-white"
        ></section>
        <section className="rounded-none bg-slate-900 p-10 text-white">
          <p className="mb-2 text-sm font-semibold text-slate-300">Contact</p>

          <h2 className="mb-4 text-4xl font-bold">お問い合わせ</h2>

          <p className="mb-6 text-slate-300">
            制作やお仕事のご相談がありましたら、こちらからご連絡ください。
          </p>

          <a
            href="/contact"
            className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            お問い合わせはこちら
          </a>
        </section>
      </div>
    </main>
  );
}

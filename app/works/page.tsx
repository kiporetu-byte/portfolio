import Header from "@/components/Header";

const works = [
  {
    title: "そなえアレ",
    status: "チーム開発",
    description: `アレルギーを持つ家族が安心して
      防災備蓄を管理できるWebアプリです。
      備蓄品の登録・期限管理・AIによる提案機能を備え、
      日常から無理なく備えられる仕組みを目指しました。`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Redis",
      "Stripe",
      "OpenAI API",
      "Docker",
      "Railway",
    ],
    points: [
      "4人チームでアジャイル開発を実施",
      "アレルギー情報を考慮した防災備蓄管理",
      "OpenAI APIを活用した備蓄提案機能",
      "Dockerを利用した開発環境を構築",
    ],
    githubUrl: "https://github.com/kiporetu-byte/sonae-are.git",
    appUrl: "",
    image: "/images/sonaeare.png",
    device: "mobile",
  },
  {
    title: "ごほうび貯金Bot",
    status: "チーム開発",
    description: `LINEで『運動した』『スタバを我慢した』など
      日々の行動を記録すると、ごほうび貯金として
      金額を管理できるアプリです。
      LINE Messaging APIと銀行APIを連携し、
      楽しみながら習慣化を続けられる仕組みを開発しました。`,
    technologies: [
      "Next.js",
      "TypeScript",
      "API Routes",
      "Prisma",
      "Supabase",
      "LINE Messaging API",
      "Webhook",
      "ngrok",
      "Sunabar API",
    ],
    points: [
      "3人チームでアジャイル開発を実施",
      "LINE Messaging API・Webhook・ngrokを利用したLINE連携",
      "Sunabar APIを利用した貯金データの更新",
      "Next.js API Routes・Prisma・Supabaseを用いたバックエンド実装",
    ],
    githubUrl: "https://github.com/kiporetu-byte/gohoubi-saving-bot.git",
    appUrl: "",
    image: "/images/gohoubi.png",
    device: "mobile",
  },
  {
    title: "お気に入り記事投稿サイト",
    status: "チーム開発",
    description: `お気に入りの記事を投稿・共有できるWebアプリです。
      JWT認証によるログイン機能や記事の投稿・閲覧機能を実装し、
      ユーザー同士で情報共有できるサービスを開発しました。`,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "MySQL",
      "SQLAlchemy",
      "Docker",
      "JWT Authentication",
    ],
    points: [
      "4人チームでアジャイル開発を実施",
      "JWT認証によるログイン機能を実装",
      "FastAPIとMySQLを利用したAPI・データベース構築",
      "Dockerを利用した開発環境を構築",
    ],
    githubUrl: "https://github.com/kiporetu-byte/work-room-b-portfolio.git",
    appUrl: "",
    image: "/images/kiji.png",
    device: "desktop",
  },
  {
    title: "家計簿アプリ",
    status: "開発中",
    description: `収入・支出を登録・管理できる家計簿アプリです。
      CRUD機能やREST APIを実装し、
      フロントエンドとバックエンドを分離した構成で開発しました。`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Vitest",
      "Supertest",
    ],

    points: [
      "CRUD機能を実装",
      "REST APIを設計・実装",
      "フロントエンドとバックエンドを分離して開発",
      "Vitest・Supertestを用いたAPIテストを実施",
    ],
    githubUrl: "",
    appUrl: "",
    image: "",
    device: "desktop",
  },
];

export default function WorksPage() {
  return (
    <main className="p-6">
      <Header />
      <section id="works" className="space-y-6"></section>
      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-slate-500">My projects</p>
          <h2 className="text-4xl font-bold">Works</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {works.map((work) => (
            <article
              key={work.title}
              className="group rounded-none border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {work.image && (
                <div className="mb-6 flex justify-center">
                  <div
                    className={
                      work.device === "mobile"
                        ? "w-60 overflow-hidden rounded-[2rem] border-4 border-slate-900 shadow-xl"
                        : "w-full overflow-hidden rounded-lg border border-slate-300 shadow-xl"
                    }
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-2xl font-semibold transition group-hover:text-slate-500">
                  {work.title}
                </h3>

                {work.status && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {work.status}
                  </span>
                )}
              </div>

              <p className="mb-5 whitespace-pre-line leading-7 text-slate-600">
                {work.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mb-6 space-y-2 text-sm text-slate-600">
                {work.points.map((point) => (
                  <li key={point}>・{point}</li>
                ))}
              </ul>

              <div className="flex gap-3">
                {work.githubUrl && (
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-100 hover:text-slate-900"
                  >
                    GitHub
                  </a>
                )}

                {work.appUrl && (
                  <a
                    href={work.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import Header from "@/components/Header";

const works = [
  {
    title: "そなえアレ",
    status: "チーム開発",
    description: "...",
    technologies: ["Next.js", "TypeScript"],
    points: ["..."],
    githubUrl: "...",
    appUrl: "...",
    image: "/images/sonaeare.png",
    device: "mobile",
  },
  {
    title: "ごほうび貯金Bot",
    status: "チーム開発",
    description: "...",
    technologies: [],
    points: [],
    githubUrl: "",
    appUrl: "",
    image: "/images/gohoubi.png",
    device: "mobile",
  },
  {
    title: "お気に入り記事投稿サイト",
    status: "チーム開発",
    description: "...",
    technologies: [],
    points: [],
    githubUrl: "",
    appUrl: "",
    image: "/images/kiji.png",
    device: "desktop",
  },
  {
    title: "家計簿アプリ",
    status: "開発中",
    description: "...",
    technologies: [],
    points: [],
    githubUrl: "",
    appUrl: "",
    image: "",
    device: "mobile",
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
                        ? "w-52 overflow-hidden rounded-[2rem] border-8 border-slate-900 shadow-xl"
                        : "w-full overflow-hidden rounded-lg border border-slate-300 shadow-xl"
                    }
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-64 w-full object-contain"
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

              <p className="mb-5 leading-7 text-slate-600">
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
                <a
                  href={work.githubUrl || "#"}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
                >
                  GitHub
                </a>

                <a
                  href={work.appUrl || "#"}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

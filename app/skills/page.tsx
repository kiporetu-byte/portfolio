import Header from "@/components/Header";

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

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <Header />

      <div className="mx-auto max-w-5xl">
        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-slate-500">What I use</p>

            <h2 className="text-4xl font-bold">Skills</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

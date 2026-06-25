import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto mb-16 flex max-w-5xl items-center justify-between">
      <Link href="/" className="text-lg font-bold hover:text-slate-700">
        Erika Portfolio
      </Link>

      <nav className="flex gap-6 text-sm font-semibold text-slate-600">
        <Link href="/" className="hover:text-slate-900">
          Home
        </Link>
        <Link href="/skills" className="hover:text-slate-900">
          Skills
        </Link>
        <Link href="/works" className="hover:text-slate-900">
          Works
        </Link>
        <Link href="/contact" className="hover:text-slate-900">
          Contact
        </Link>
      </nav>
    </header>
  );
}

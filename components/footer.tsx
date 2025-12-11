import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container flex flex-col gap-3 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} ProspectivePulse Tech</p>
        <div className="flex gap-4">
          <Link href="https://github.com/ProspectivePulse" className="hover:text-neutral-800" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-neutral-800" target="_blank">
            LinkedIn
          </Link>
          <Link href="mailto:your.email@example.com" className="hover:text-neutral-800">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

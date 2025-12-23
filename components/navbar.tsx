"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" }
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-sm tracking-[0.2em] uppercase text-neutral-900">
          Prospective<span className="font-semibold">Pulse</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-neutral-900 ${
                pathname === item.href ? "text-neutral-900" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="container flex flex-col py-2 text-sm text-neutral-700">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 ${
                  pathname === item.href ? "font-medium text-neutral-900" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

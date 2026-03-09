"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Gmail", href: "/#gmail" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/sendnova-logo-trimmed.png"
              alt="SendNova"
              width={253}
              height={56}
              priority
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/#waitlist" className="hidden sm:block">
              <Button className="h-9 rounded-lg px-4 font-semibold">
                Join Waitlist
              </Button>
            </Link>
            <button
              className="p-2 text-slate-400 hover:text-slate-900 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-slate-100 pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-md px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-2 px-3 sm:hidden">
                <Link
                  href="/#waitlist"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="h-9 w-full rounded-lg font-semibold">
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

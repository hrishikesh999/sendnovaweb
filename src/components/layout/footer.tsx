import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Early Access", href: "/#waitlist" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Gmail Security", href: "/gmail-security" },
      { label: "Data Usage", href: "/data-usage" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "support@sendnova.ai", href: "mailto:support@sendnova.ai" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Brand block */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/sendnova-logo-trimmed.png"
                  alt="SendNova"
                  width={253}
                  height={56}
                  className="h-7 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Thoughtful outreach starts with context.
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                AI-powered outreach research and Gmail sending for small-batch
                campaigns.
              </p>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
              {linkGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 border-t border-slate-100 py-8 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} sendnova. All rights reserved.</p>
          <p>SendNova is not affiliated with or endorsed by Google.</p>
        </div>
      </Container>
    </footer>
  );
}

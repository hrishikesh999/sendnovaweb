import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Blog", href: "/blog" },
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
      { label: "support@sendnovahq.com", href: "mailto:support@sendnovahq.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="bg-slate-950">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {/* Brand block */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block">
                <Image
                  src="/sendnova-logo-light.png"
                  alt="Sendnova"
                  width={253}
                  height={56}
                  className="h-8 w-auto md:h-10"
                />
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
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
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 transition-colors hover:text-blue-400"
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
        <div className="flex flex-col items-center gap-3 border-t border-slate-800 py-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} sendnova. All rights reserved.
          </p>
          <p>Sendnova is not affiliated with or endorsed by Google.</p>
        </div>
      </Container>
      </div>
    </footer>
  );
}

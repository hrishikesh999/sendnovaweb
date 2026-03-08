import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Gmail Security", href: "/gmail-security" },
  { label: "Data Usage", href: "/data-usage" },
  { label: "Contact", href: "/contact" },
  { label: "How It Works", href: "/how-it-works" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-16">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/sendnova-logo-trimmed.png"
              alt="SendNova"
              width={253}
              height={56}
              className="h-6 w-auto"
            />
          </Link>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 text-xs text-slate-500">
            <p>SendNova is not affiliated with or endorsed by Google.</p>
            <p>&copy; 2026 SendNova. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

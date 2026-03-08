import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-16">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            <span className="text-primary">Send</span>
            <span className="text-slate-900">Nova</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Contact
            </Link>
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

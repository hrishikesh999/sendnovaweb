import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Mail, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Sendnova",
  description: "Get in touch with the Sendnova team.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Contact Sendnova
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              If you have questions about Sendnova, Gmail permissions, privacy,
              or account support, reach out and we&apos;ll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-100/60 bg-white p-8 shadow-[0_8px_40px_rgba(37,99,235,0.06)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Support</h2>
              <a
                href="mailto:support@sendnovahq.com"
                className="mt-2 inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                support@sendnovahq.com
              </a>
            </div>

            <div className="rounded-xl border border-blue-100/60 bg-white p-8 shadow-[0_8px_40px_rgba(37,99,235,0.06)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Response Time
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-blue-100/60 bg-white p-8 shadow-[0_8px_40px_rgba(37,99,235,0.06)]">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
              You can contact us for
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
              <li>product questions</li>
              <li>Gmail connection or permissions questions</li>
              <li>privacy or data requests</li>
              <li>account support</li>
              <li>early access and waitlist questions</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

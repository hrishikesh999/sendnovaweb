import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — SendNova",
  description: "Get in touch with the SendNova team.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Have a question or want to learn more about SendNova? We&apos;d love
            to hear from you.
          </p>

          <div className="mt-14 rounded-xl bg-white p-10 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Email Us</h2>
            <p className="mt-2 text-slate-600">
              For support, questions, or partnership inquiries:
            </p>
            <a
              href="mailto:support@sendnova.co"
              className="mt-4 inline-block text-lg font-medium text-primary underline-offset-4 hover:underline"
            >
              support@sendnova.co
            </a>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            We typically respond within 1–2 business days.
          </p>
        </div>
      </Container>
    </Section>
  );
}

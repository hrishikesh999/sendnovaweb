import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "How It Works — SendNova",
  description:
    "Learn how SendNova researches companies and generates thoughtful outreach emails.",
};

export default function HowItWorksPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            How SendNova Works
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            SendNova helps you send thoughtful outreach by identifying why to
            reach out before the email is written.
          </p>

          <div className="mt-14 space-y-14">
            {[
              {
                step: "1",
                title: "Add companies",
                body: "Upload or add the companies you want to reach. SendNova works from company domains and contact details so each outreach campaign starts with real targets.",
              },
              {
                step: "2",
                title: "SendNova researches the company",
                body: "For each company, SendNova analyzes publicly available information to identify relevant context, signals, and observations. This helps ground every message in something real.",
              },
              {
                step: "3",
                title: "AI generates contextual outreach",
                body: "Using your campaign brief, SendNova generates outreach emails based on actual observations \u2014 not generic templates. The result is more thoughtful, relevant communication.",
              },
              {
                step: "4",
                title: "Review and approve",
                body: "You stay in control. Review the generated emails, make edits if needed, and approve what should be sent.",
              },
              {
                step: "5",
                title: "Send through Gmail",
                body: "When connected, SendNova uses Gmail OAuth to send approved emails on your behalf. SendNova only requests permission to send emails. It does not read your inbox.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-sm font-semibold text-blue-500">
                  {item.step}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-blue-100/60 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-8 text-center">
            <p className="text-lg font-medium text-slate-800">
              SendNova is built for small-batch, thoughtful outreach &mdash; not
              mass email blasts.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

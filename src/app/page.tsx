import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/common/section-heading";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  Search,
  Send,
  Briefcase,
  Megaphone,
  Rocket,
  Users,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

const steps = [
  {
    step: "1",
    icon: Building2,
    title: "Add a list of companies",
    description:
      "Import or enter the companies you want to reach out to.",
  },
  {
    step: "2",
    icon: Search,
    title: "SendNova researches each one",
    description:
      "Each company is analyzed for relevant signals, products, and context.",
  },
  {
    step: "3",
    icon: Send,
    title: "Generate a ready-to-send campaign",
    description:
      "Get personalized outreach emails you can review and send through Gmail.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    title: "Consultants",
    description:
      "Reach potential clients with insights about their business challenges.",
  },
  {
    icon: Megaphone,
    title: "Agencies",
    description:
      "Introduce your services with relevant context instead of generic outreach.",
  },
  {
    icon: Rocket,
    title: "SaaS Founders",
    description:
      "Connect with companies using relevant tools or workflows.",
  },
  {
    icon: Users,
    title: "Recruiters",
    description: "Personalize outreach based on hiring signals.",
  },
  {
    icon: Handshake,
    title: "Partnership Teams",
    description:
      "Identify companies with complementary audiences.",
  },
];

const gmailPoints = [
  "SendNova only requests permission to send emails on your behalf",
  "SendNova does not read your inbox",
  "SendNova does not access your email history",
  "SendNova does not store your Gmail messages",
  "Access can be revoked anytime from your Google account settings",
];

export default function HomePage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <Section className="pt-24 pb-20 md:pt-32 md:pb-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 md:text-6xl">
              Fix the hardest part
              <br />
              of cold outreach
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
              SendNova researches companies and generates thoughtful outbound
              emails based on real observations — so you reach out with context,
              not templates.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="#waitlist">
                <Button className="h-12 rounded-lg px-8 text-base font-semibold">
                  Join Early Access Waitlist
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="h-12 rounded-lg px-8 text-base font-semibold"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="mt-10 text-sm text-slate-500">
              <ShieldCheck className="mr-1.5 inline-block h-4 w-4 align-text-bottom text-slate-400" />
              Works with Gmail. SendNova only requests permission to send emails
              — never to read your inbox.
            </p>
          </div>

          {/* Product mockup */}
          <div className="mx-auto mt-20 max-w-3xl">
            <div className="overflow-hidden rounded-xl bg-white shadow-[0_8px_60px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <div className="ml-4 h-2.5 w-36 rounded-full bg-slate-100" />
              </div>
              <div className="grid gap-5 p-6 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Search className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs font-medium text-slate-500">
                      Company Research
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-3/4 rounded-full bg-slate-200/70" />
                    <div className="h-2 w-full rounded-full bg-slate-200/70" />
                    <div className="h-2 w-2/3 rounded-full bg-slate-200/70" />
                    <div className="h-2 w-5/6 rounded-full bg-slate-200/70" />
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Send className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs font-medium text-slate-500">
                      Generated Email
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-full rounded-full bg-primary/10" />
                    <div className="h-2 w-5/6 rounded-full bg-primary/10" />
                    <div className="h-2 w-4/5 rounded-full bg-primary/10" />
                    <div className="h-2 w-2/3 rounded-full bg-primary/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── Problem ───── */}
      <Section id="problem" background="gray">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Most cold outreach fails
              <br />
              before the first email
            </h2>
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-slate-800">
              <p>The real challenge isn&apos;t sending.</p>
              <p>
                It&apos;s knowing{" "}
                <em className="not-italic font-medium text-slate-900">why</em>{" "}
                to reach out in the first place.
              </p>
              <p>
                Without context, emails sound generic.
                <br />
                And generic emails get ignored.
              </p>
              <p>
                SendNova focuses on the step most tools skip:{" "}
                <span className="font-medium text-slate-900">
                  understanding the company before writing the message.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── How it Works ───── */}
      <Section id="how-it-works">
        <Container>
          <SectionHeading title="How SendNova works" />
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute right-8 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-400">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-800">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───── Use Cases ───── */}
      <Section id="use-cases" background="gray">
        <Container>
          <SectionHeading
            title="Built for thoughtful outreach"
            subtitle="SendNova is designed for professionals who care about relevance and reputation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-800">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───── Gmail Trust ───── */}
      <Section id="gmail">
        <Container>
          <SectionHeading
            title="How SendNova works with Gmail"
            subtitle="SendNova connects to your Gmail account using Google's secure authorization system."
          />
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Your privacy is protected
                </h3>
              </div>
              <ul className="space-y-5">
                {gmailPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-lg leading-relaxed text-slate-800">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── Responsible Outreach ───── */}
      <Section background="gray">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Built for thoughtful outreach
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-800">
              <p>
                SendNova is designed for relevant, personalized outreach.
              </p>
              <div className="flex flex-col items-center gap-1.5 py-1">
                <p className="font-medium text-slate-800">
                  Consulting introductions
                </p>
                <p className="font-medium text-slate-800">
                  Partnership exploration
                </p>
                <p className="font-medium text-slate-800">
                  Recruiting conversations
                </p>
              </div>
              <p className="font-medium text-slate-900">
                It is not designed for mass unsolicited email campaigns.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───── Waitlist ───── */}
      <Section id="waitlist">
        <Container>
          <SectionHeading
            title="Join early access"
            subtitle="SendNova is currently in private beta. Join the waitlist to get early access when the platform opens."
          />
          <div className="mx-auto max-w-xl">
            <WaitlistForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

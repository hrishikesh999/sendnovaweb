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
  XCircle,
  Copy,
  Zap,
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

const problems = [
  {
    icon: XCircle,
    title: "Generic emails get ignored",
    description:
      "Without context, your outreach sounds like everyone else\u2019s. Recipients delete before reading.",
  },
  {
    icon: Copy,
    title: "Templates miss what matters",
    description:
      "Mail merge personalization isn\u2019t real personalization. People can tell the difference.",
  },
  {
    icon: Zap,
    title: "Most tools help you send, not understand",
    description:
      "Sending at scale doesn\u2019t matter if you don\u2019t know why you\u2019re reaching out.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <Section
        className="pt-24 pb-20 md:pt-32 md:pb-24"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(59,130,246,0.15), rgba(255,255,255,0) 60%)",
        }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-6xl font-bold tracking-tight leading-[1.05] text-slate-900 md:text-7xl">
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

          {/* Product screenshot */}
          <img
            src="/images/campaign-detail.png"
            alt="SendNova campaign workspace showing AI insights and generated outreach emails"
            className="mx-auto mt-16 w-full max-w-[900px] rounded-xl border border-gray-200 shadow-2xl opacity-80 brightness-110"
          />
        </Container>
      </Section>

      {/* ───── Problem ───── */}
      <section id="problem" className="relative overflow-hidden bg-[#0B1730] py-24 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-500/[0.07] blur-[120px]" />
        <Container>
          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Most cold outreach fails
                <br />
                before the first email
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                The real challenge isn&apos;t sending. It&apos;s knowing why to
                reach out in the first place.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {problems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-7 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <item.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-14 text-center text-lg font-medium text-blue-300/80">
              SendNova starts where most tools stop: understanding the company
              first.
            </p>
          </div>
        </Container>
      </section>

      {/* ───── How it Works ───── */}
      <Section id="how-it-works">
        <Container>
          <SectionHeading title="How SendNova works" />
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-blue-100/60 bg-white p-8 shadow-[0_8px_40px_rgba(37,99,235,0.06)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute right-8 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-400">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───── Use Cases ───── */}
      <Section id="use-cases" className="bg-[#F6F8FF]">
        <Container>
          <SectionHeading
            title="Built for thoughtful outreach"
            subtitle="SendNova is designed for professionals who care about relevance and reputation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-100/50 bg-white p-8 shadow-[0_8px_40px_rgba(37,99,235,0.05)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
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
            <div className="rounded-xl border border-blue-100/60 bg-white p-8 shadow-[0_8px_40px_rgba(37,99,235,0.06)] sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Your privacy is protected
                </h3>
              </div>
              <ul className="space-y-5">
                {gmailPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                    <span className="text-lg leading-relaxed text-slate-700">
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
      <Section className="bg-[#F6F8FF]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Built for thoughtful outreach
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                SendNova is designed for relevant, personalized outreach.
              </p>
              <div className="flex flex-col items-center gap-2 py-2">
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

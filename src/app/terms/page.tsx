import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Terms of Service — SendNova",
  description: "SendNova terms of service.",
};

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-500">Last updated: March 2026</p>

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-slate-800 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
            <div>
              <h2>Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using SendNova, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do
                not use the service.
              </p>
            </div>

            <div>
              <h2>Description of Service</h2>
              <p className="mt-3">
                SendNova is a SaaS platform that helps professionals research
                companies and generate personalized outbound emails. The service
                is designed for professional, small-batch outreach and is not
                intended for mass unsolicited email campaigns.
              </p>
            </div>

            <div>
              <h2>Acceptable Use</h2>
              <p className="mt-3">You agree to use SendNova only for:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Professional and legitimate business outreach</li>
                <li>Personalized, relevant communications</li>
                <li>
                  Purposes that comply with applicable laws and regulations
                </li>
              </ul>
              <p className="mt-5">You agree not to use SendNova for:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Mass unsolicited email campaigns (spam)</li>
                <li>Any illegal or unauthorized purpose</li>
                <li>
                  Sending content that is harmful, threatening, or abusive
                </li>
                <li>
                  Violating any applicable anti-spam laws (CAN-SPAM, GDPR, etc.)
                </li>
              </ul>
            </div>

            <div>
              <h2>Account Responsibilities</h2>
              <p className="mt-3">
                You are responsible for maintaining the security of your account
                and for all activity that occurs under your account. You must
                notify us immediately of any unauthorized use.
              </p>
            </div>

            <div>
              <h2>Gmail Integration</h2>
              <p className="mt-3">
                SendNova integrates with Gmail through Google&apos;s OAuth
                system. By connecting your Gmail account, you authorize SendNova
                to send emails on your behalf. SendNova does not read, access,
                or store your inbox messages.
              </p>
            </div>

            <div>
              <h2>Limitation of Liability</h2>
              <p className="mt-3">
                SendNova is provided &ldquo;as is&rdquo; without warranties of
                any kind. We are not liable for any indirect, incidental, or
                consequential damages arising from your use of the service.
              </p>
            </div>

            <div>
              <h2>Termination</h2>
              <p className="mt-3">
                We reserve the right to suspend or terminate your account if you
                violate these terms. You may also terminate your account at any
                time by contacting us.
              </p>
            </div>

            <div>
              <h2>Changes to Terms</h2>
              <p className="mt-3">
                We may update these terms from time to time. We will notify you
                of significant changes. Continued use of SendNova after changes
                constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2>Contact</h2>
              <p className="mt-3">
                If you have questions about these terms, please contact us at{" "}
                <a
                  href="mailto:support@sendnova.co"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  support@sendnova.co
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

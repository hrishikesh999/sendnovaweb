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
          <p className="mt-4 text-slate-500">Last updated: March 8, 2026</p>

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
            <div>
              <h2>1. Introduction</h2>
              <p className="mt-3">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access
                to and use of the SendNova website and application.
              </p>
              <p className="mt-3">
                By accessing or using SendNova, you agree to be bound by these
                Terms.
              </p>
              <p className="mt-3">
                If you do not agree with these Terms, you should not use the
                SendNova service.
              </p>
            </div>

            <div>
              <h2>2. About SendNova</h2>
              <p className="mt-3">
                SendNova is a software platform that helps users research
                companies and generate contextual outreach emails based on
                publicly available information.
              </p>
              <p className="mt-3">
                SendNova is designed to support thoughtful, small-batch outreach,
                not bulk unsolicited email campaigns.
              </p>
            </div>

            <div>
              <h2>3. User Accounts</h2>
              <p className="mt-3">
                To use SendNova, you may be required to create an account and
                provide accurate information.
              </p>
              <p className="mt-3">You are responsible for:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  maintaining the confidentiality of your account credentials
                </li>
                <li>all activity that occurs under your account</li>
                <li>
                  ensuring that your use of SendNova complies with applicable
                  laws and regulations
                </li>
              </ul>
            </div>

            <div>
              <h2>4. Gmail Integration</h2>
              <p className="mt-3">
                SendNova allows users to connect their Gmail account through
                Google OAuth authentication.
              </p>
              <p className="mt-3">
                This connection allows SendNova to send outreach emails on your
                behalf using the Gmail permission:
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 px-5 py-3">
                <code className="text-sm text-slate-700">
                  https://www.googleapis.com/auth/gmail.send
                </code>
              </div>
              <p className="mt-4">
                SendNova does not read inbox messages or access email history.
              </p>
              <p className="mt-3">
                Users may revoke SendNova&apos;s access at any time through their
                Google account settings.
              </p>
            </div>

            <div>
              <h2>5. Acceptable Use</h2>
              <p className="mt-3">Users agree not to use SendNova to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>send spam or unsolicited bulk emails</li>
                <li>distribute malware or malicious content</li>
                <li>impersonate individuals or organizations</li>
                <li>
                  violate applicable email laws such as CAN-SPAM, GDPR, or other
                  regulations
                </li>
                <li>harass or abuse recipients</li>
              </ul>
              <p className="mt-4">
                SendNova reserves the right to suspend or terminate accounts
                engaged in abusive or unlawful activity.
              </p>
            </div>

            <div>
              <h2>6. Responsible Outreach</h2>
              <p className="mt-3">
                SendNova is designed for thoughtful outreach and
                relationship-driven communication.
              </p>
              <p className="mt-3">
                Users are responsible for ensuring their outreach practices
                comply with applicable email laws and ethical communication
                standards.
              </p>
              <p className="mt-3">
                SendNova does not guarantee response rates, conversions, or
                business outcomes.
              </p>
            </div>

            <div>
              <h2>7. Intellectual Property</h2>
              <p className="mt-3">
                The SendNova platform, including its software, branding, and
                content, is the property of SendNova and is protected by
                applicable intellectual property laws.
              </p>
              <p className="mt-3">
                Users may not copy, reproduce, distribute, or reverse engineer
                any part of the SendNova platform without permission.
              </p>
            </div>

            <div>
              <h2>8. Service Availability</h2>
              <p className="mt-3">
                SendNova is provided on an &ldquo;as-is&rdquo; and
                &ldquo;as-available&rdquo; basis.
              </p>
              <p className="mt-3">
                While we strive to maintain reliable service, SendNova does not
                guarantee uninterrupted availability or error-free operation.
              </p>
            </div>

            <div>
              <h2>9. Limitation of Liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, SendNova shall not be
                liable for any indirect, incidental, or consequential damages
                resulting from the use of the service.
              </p>
              <p className="mt-3">
                Users assume full responsibility for the emails they send using
                SendNova.
              </p>
            </div>

            <div>
              <h2>10. Termination</h2>
              <p className="mt-3">
                SendNova reserves the right to suspend or terminate access to the
                service if users violate these Terms or engage in abusive or
                unlawful activity.
              </p>
              <p className="mt-3">
                Users may stop using the service at any time.
              </p>
            </div>

            <div>
              <h2>11. Changes to These Terms</h2>
              <p className="mt-3">
                SendNova may update these Terms periodically.
              </p>
              <p className="mt-3">
                Updated versions will be posted on this page with a revised
                &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            <div>
              <h2>12. Contact</h2>
              <p className="mt-3">
                If you have questions about these Terms, please contact:
              </p>
              <a
                href="mailto:support@sendnova.ai"
                className="mt-2 inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                support@sendnova.ai
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

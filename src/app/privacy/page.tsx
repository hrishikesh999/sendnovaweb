import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Privacy Policy — SendNova",
  description: "SendNova privacy policy and data usage information.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-500">Last updated: March 2026</p>

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-slate-800 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
            <div>
              <h2>Overview</h2>
              <p className="mt-3">
                SendNova is committed to protecting your privacy. This policy
                explains what data we collect, how we use it, and your rights
                regarding your information.
              </p>
            </div>

            <div>
              <h2>Information We Collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Account information (name, email address) provided when you
                  sign up or join our waitlist.
                </li>
                <li>
                  Usage data related to how you interact with the SendNova
                  platform.
                </li>
                <li>
                  Company data you provide for outreach campaigns (company
                  names, domains).
                </li>
              </ul>
            </div>

            <div>
              <h2>Gmail Data Usage</h2>
              <div className="mt-4 rounded-xl bg-slate-50 p-8">
                <p className="mb-5 font-medium text-slate-900">
                  SendNova&apos;s use of Google APIs adheres to the{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </p>
                <ul className="space-y-4">
                  {[
                    "SendNova uses Google OAuth to securely connect to your Gmail account.",
                    <>
                      SendNova requests the{" "}
                      <code className="rounded bg-white px-1.5 py-0.5 font-mono text-sm">
                        gmail.send
                      </code>{" "}
                      scope only — permission to send emails on your behalf.
                    </>,
                    "SendNova does not read, modify, or delete your inbox messages.",
                    "SendNova does not access your inbox contents, email history, or contacts.",
                    <>
                      You can revoke SendNova&apos;s access at any time from
                      your{" "}
                      <a
                        href="https://myaccount.google.com/permissions"
                        className="text-primary underline underline-offset-4 hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Account settings
                      </a>
                      .
                    </>,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2>Data Security</h2>
              <p className="mt-3">
                We implement industry-standard security measures to protect your
                data. All data is transmitted over encrypted connections (HTTPS)
                and stored securely.
              </p>
            </div>

            <div>
              <h2>Data Retention</h2>
              <p className="mt-3">
                We retain your data only as long as necessary to provide our
                services. You may request deletion of your account and
                associated data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2>Your Rights</h2>
              <p className="mt-3">
                You have the right to access, correct, or delete your personal
                data. You may also withdraw consent for data processing at any
                time. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:support@sendnova.co"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  support@sendnova.co
                </a>
                .
              </p>
            </div>

            <div>
              <h2>Contact</h2>
              <p className="mt-3">
                If you have questions about this privacy policy, please contact
                us at{" "}
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

import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Privacy Policy — Sendnova",
  description: "Sendnova privacy policy and data usage information.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-500">Last updated: March 8, 2026</p>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Sendnova (&ldquo;Sendnova&rdquo;, &ldquo;we&rdquo;,
            &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and
            is committed to protecting your personal information.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            This Privacy Policy explains how Sendnova collects, uses, and
            protects information when you use the Sendnova website and
            application.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Sendnova is designed to help users send thoughtful, contextual
            outreach emails using insights gathered from publicly available
            company information.
          </p>

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
            <div>
              <h2>Information We Collect</h2>
              <p className="mt-3">
                Sendnova may collect the following information when you use the
                platform:
              </p>
              <p className="mt-4 font-medium text-slate-900">
                Account information
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Name</li>
                <li>Email address</li>
              </ul>
              <p className="mt-4 font-medium text-slate-900">
                Campaign information
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Company domains you analyze</li>
                <li>Outreach email content generated within Sendnova</li>
              </ul>
              <p className="mt-4 font-medium text-slate-900">
                Usage information
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Application activity</li>
                <li>Device and browser information</li>
                <li>Log data for security and debugging</li>
              </ul>
              <p className="mt-4">
                Sendnova only collects information necessary to operate the
                service.
              </p>
            </div>

            <div>
              <h2>Google Account Information</h2>
              <p className="mt-3">
                If you choose to connect your Gmail account to Sendnova, the
                application will request permission through Google OAuth
                authentication.
              </p>
              <p className="mt-3">
                Sendnova uses the following Google permission scope:
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 px-5 py-3">
                <code className="text-sm text-slate-700">
                  https://www.googleapis.com/auth/gmail.send
                </code>
              </div>
              <p className="mt-4">
                This permission allows Sendnova to send emails through your Gmail
                account on your behalf.
              </p>
            </div>

            <div>
              <h2>Gmail Data Access</h2>
              <p className="mt-3">
                Sendnova does not access or read your Gmail inbox.
              </p>
              <p className="mt-3">Sendnova does not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>read email messages</li>
                <li>access Gmail inbox content</li>
                <li>access contacts</li>
                <li>access email history</li>
                <li>monitor incoming emails</li>
                <li>store Gmail message content</li>
              </ul>
              <p className="mt-4">
                Sendnova only uses Gmail to send outreach emails that you approve
                within the application.
              </p>
            </div>

            <div>
              <h2>How We Use Information</h2>
              <p className="mt-3">
                Sendnova uses collected information to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>operate and maintain the Sendnova platform</li>
                <li>generate outreach emails</li>
                <li>
                  send emails on behalf of users through Gmail (when authorized)
                </li>
                <li>improve application performance and reliability</li>
                <li>provide customer support</li>
                <li>prevent abuse and maintain platform security</li>
              </ul>
            </div>

            <div>
              <h2>Data Storage and Security</h2>
              <p className="mt-3">
                Sendnova uses industry-standard security measures to protect user
                information.
              </p>
              <p className="mt-3">Security measures include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>encrypted HTTPS connections</li>
                <li>secure authentication systems</li>
                <li>restricted internal access to data</li>
                <li>minimal data collection principles</li>
              </ul>
              <p className="mt-4">
                Sendnova only stores the information required to provide the
                service.
              </p>
            </div>

            <div>
              <h2>Data Sharing</h2>
              <p className="mt-3">
                Sendnova does not sell or rent user data.
              </p>
              <p className="mt-3">
                Sendnova may share limited information with trusted service
                providers strictly for the purpose of operating the platform,
                such as hosting infrastructure.
              </p>
              <p className="mt-3">
                Sendnova does not share Gmail data with third parties.
              </p>
            </div>

            <div>
              <h2>Data Retention</h2>
              <p className="mt-3">
                Sendnova retains user data only as long as necessary to provide
                the service.
              </p>
              <p className="mt-3">
                Users may request deletion of their account and associated data
                at any time.
              </p>
            </div>

            <div>
              <h2>Data Deletion Requests</h2>
              <p className="mt-3">
                Users may request deletion of their Sendnova account and
                associated data by contacting:
              </p>
              <a
                href="mailto:support@sendnovahq.com"
                className="mt-2 inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                support@sendnovahq.com
              </a>
              <p className="mt-3">
                Once processed, the user&apos;s account and associated data will
                be permanently removed from Sendnova systems.
              </p>
            </div>

            <div>
              <h2>Third-Party Services</h2>
              <p className="mt-3">
                Sendnova relies on trusted third-party infrastructure providers
                for hosting and security services.
              </p>
              <p className="mt-3">
                These providers process data only as necessary to operate the
                Sendnova platform.
              </p>
            </div>

            <div>
              <h2>Changes to This Privacy Policy</h2>
              <p className="mt-3">
                Sendnova may update this Privacy Policy periodically to reflect
                changes to the service or legal requirements.
              </p>
              <p className="mt-3">
                Updated versions will be posted on this page.
              </p>
            </div>

            <div>
              <h2>Contact</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, please contact:
              </p>
              <a
                href="mailto:support@sendnovahq.com"
                className="mt-2 inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                support@sendnovahq.com
              </a>
            </div>

            <div>
              <h2>Google API Services User Data Policy</h2>
              <p className="mt-3">
                Sendnova&apos;s use and transfer of information received from
                Google APIs will adhere to the{" "}
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
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

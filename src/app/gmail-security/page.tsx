import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Gmail Security — SendNova",
  description:
    "How SendNova uses Gmail permissions securely and responsibly.",
};

export default function GmailSecurityPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            How SendNova Uses Gmail
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            SendNova connects to Gmail using Google&apos;s secure OAuth
            authorization system. This allows SendNova to send outreach emails
            on your behalf while keeping your Google account secure.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            SendNova is designed to help users send thoughtful, contextual
            outreach &mdash; not mass spam campaigns.
          </p>

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
            <div>
              <h2>What Permission SendNova Requests</h2>
              <p className="mt-3">
                When you connect your Gmail account, SendNova requests permission
                to:
              </p>
              <p className="mt-3 font-medium text-slate-900">
                Send email on your behalf.
              </p>
              <p className="mt-3">
                This allows SendNova to deliver the outreach emails generated
                inside the SendNova campaign workspace.
              </p>
              <p className="mt-3">
                SendNova uses the following Google OAuth scope:
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 px-5 py-3">
                <code className="text-sm text-slate-700">
                  https://www.googleapis.com/auth/gmail.send
                </code>
              </div>
              <p className="mt-4">
                This permission allows SendNova to send emails through your Gmail
                account.
              </p>
            </div>

            <div>
              <h2>What SendNova Does NOT Access</h2>
              <p className="mt-3">
                SendNova does not request permission to read your inbox or access
                your Gmail data.
              </p>
              <p className="mt-3">SendNova does not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>read your Gmail inbox</li>
                <li>access your email history</li>
                <li>access your contacts</li>
                <li>monitor incoming emails</li>
                <li>modify existing messages</li>
                <li>store your Gmail messages</li>
              </ul>
              <p className="mt-4">
                SendNova only sends the emails you approve in your campaign.
              </p>
            </div>

            <div>
              <h2>How SendNova Protects Your Data</h2>
              <p className="mt-3">
                SendNova follows industry-standard security practices to protect
                user data.
              </p>
              <p className="mt-3">These include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>secure OAuth authentication through Google</li>
                <li>encrypted HTTPS communication</li>
                <li>minimal data access principles</li>
                <li>restricted access to Gmail permissions</li>
              </ul>
              <p className="mt-4">
                SendNova only requests the minimum permission required for the
                product to function.
              </p>
            </div>

            <div>
              <h2>User Control</h2>
              <p className="mt-3">
                You remain fully in control of your Gmail connection.
              </p>
              <p className="mt-3">
                You can disconnect SendNova from your Google account at any time
                through:
              </p>
              <p className="mt-3 font-medium text-slate-900">
                Google Account &rarr; Security &rarr; Third-Party Access
              </p>
              <p className="mt-3">
                Once access is revoked, SendNova can no longer send emails
                through your account.
              </p>
            </div>

            <div>
              <h2>Responsible Email Practices</h2>
              <p className="mt-3">
                SendNova is designed for small-batch, thoughtful outreach.
              </p>
              <p className="mt-3">
                The platform encourages responsible communication and discourages
                bulk spam campaigns.
              </p>
              <p className="mt-3">
                Typical SendNova usage involves sending 20&ndash;500 contextual
                emails per month, not mass automated outreach.
              </p>
            </div>

            <div>
              <h2>Contact</h2>
              <p className="mt-3">
                If you have questions about how SendNova uses Gmail permissions,
                contact:
              </p>
              <a
                href="mailto:support@sendnovahq.com"
                className="mt-2 inline-block text-lg font-medium text-primary underline-offset-4 hover:underline"
              >
                support@sendnovahq.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

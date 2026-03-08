import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Data Usage — SendNova",
  description: "How SendNova collects, processes, and protects your data.",
};

export default function DataUsagePage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            How SendNova Uses Data
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            SendNova is designed to help users send thoughtful, contextual
            outreach emails based on publicly available company information.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            To provide this functionality, SendNova may process limited user data
            and &mdash; when authorized by the user &mdash; send emails through
            Gmail.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            SendNova follows strict data minimization principles and only
            accesses the information required to operate the service.
          </p>

          <div className="mt-14 space-y-12 text-lg leading-relaxed text-slate-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
            <div>
              <h2>Google Account Permissions</h2>
              <p className="mt-3">
                If you choose to connect your Gmail account, SendNova will
                request authorization through Google&apos;s secure OAuth system.
              </p>
              <p className="mt-3">
                SendNova uses the following permission:
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 px-5 py-3">
                <code className="text-sm text-slate-700">
                  https://www.googleapis.com/auth/gmail.send
                </code>
              </div>
              <p className="mt-4">
                This permission allows SendNova to send emails on your behalf
                using your Gmail account.
              </p>
              <p className="mt-3">
                This permission does not allow SendNova to access your inbox.
              </p>
            </div>

            <div>
              <h2>What SendNova Accesses</h2>
              <p className="mt-3">
                When you use SendNova, the application may process the following
                information:
              </p>
              <p className="mt-4 font-medium text-slate-900">
                Account information
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>name</li>
                <li>email address</li>
              </ul>
              <p className="mt-4 font-medium text-slate-900">
                Campaign information
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>company domains you research</li>
                <li>outreach emails generated within SendNova</li>
              </ul>
              <p className="mt-4 font-medium text-slate-900">
                Gmail sending access (optional)
              </p>
              <p className="mt-2">
                When authorized, SendNova can send emails through your Gmail
                account.
              </p>
            </div>

            <div>
              <h2>What SendNova Does NOT Access</h2>
              <p className="mt-3">
                SendNova does not access or store Gmail message content.
              </p>
              <p className="mt-3">SendNova does not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>read your Gmail inbox</li>
                <li>access email history</li>
                <li>access Gmail contacts</li>
                <li>monitor incoming emails</li>
                <li>store Gmail message content</li>
              </ul>
              <p className="mt-4">
                SendNova only sends emails that you approve within the
                application.
              </p>
            </div>

            <div>
              <h2>How SendNova Uses Data</h2>
              <p className="mt-3">
                SendNova uses data strictly to operate the service.
              </p>
              <p className="mt-3">This includes:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>generating contextual outreach emails</li>
                <li>sending emails through Gmail when authorized</li>
                <li>improving system performance</li>
                <li>maintaining platform security</li>
                <li>providing customer support</li>
              </ul>
              <p className="mt-4">
                SendNova does not sell or share user data with third parties.
              </p>
            </div>

            <div>
              <h2>Data Security</h2>
              <p className="mt-3">
                SendNova follows standard security practices including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>encrypted HTTPS communication</li>
                <li>secure authentication systems</li>
                <li>limited internal access to user data</li>
                <li>minimal data collection principles</li>
              </ul>
            </div>

            <div>
              <h2>User Control</h2>
              <p className="mt-3">
                Users maintain full control of their data.
              </p>
              <p className="mt-3">Users can:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  disconnect their Gmail account at any time through Google
                  account settings
                </li>
                <li>
                  request deletion of their SendNova account and data
                </li>
              </ul>
              <p className="mt-4">To request deletion, contact:</p>
              <a
                href="mailto:support@sendnova.ai"
                className="mt-2 inline-block font-medium text-primary underline-offset-4 hover:underline"
              >
                support@sendnova.ai
              </a>
            </div>

            <div>
              <h2>Responsible Use</h2>
              <p className="mt-3">
                SendNova is designed for small-batch, thoughtful outreach rather
                than bulk automated email campaigns.
              </p>
              <p className="mt-3">
                Users are responsible for complying with applicable email laws
                and communication standards.
              </p>
            </div>

            <div>
              <h2>Contact</h2>
              <p className="mt-3">
                If you have questions about how SendNova handles data or
                permissions, contact:
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

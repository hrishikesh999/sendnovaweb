"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const roles = [
  "Freelancer",
  "Consultant",
  "Agency",
  "SaaS Founder",
  "Recruiter",
  "Partnerships",
  "Other",
];

const challenges = [
  "Finding companies",
  "Researching companies",
  "Writing personalized emails",
  "Following up",
  "Deliverability",
  "Other",
];

const volumes = ["1–20", "20–100", "100–500", "500+"];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [challenge, setChallenge] = useState("");
  const [volume, setVolume] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!role || !challenge || !volume) return;
    setLoading(true);

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, challenge, volume }),
      });
    } catch {
      // Show success state regardless — backend integration comes later
    }

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">
          You&apos;re on the waitlist.
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          SendNova is currently in private beta. We&apos;ll invite early users
          in small batches to ensure a smooth experience.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.05)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="wl-name">Name</Label>
          <Input
            id="wl-name"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wl-email">Email</Label>
          <Input
            id="wl-email"
            type="email"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>What best describes you?</Label>
        <Select value={role} onValueChange={(v) => setRole(v ?? "")}>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((r) => (
              <SelectItem key={r} value={r.toLowerCase()}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>What is the hardest part of outreach for you?</Label>
        <Select value={challenge} onValueChange={(v) => setChallenge(v ?? "")}>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="Select your biggest challenge" />
          </SelectTrigger>
          <SelectContent>
            {challenges.map((c) => (
              <SelectItem key={c} value={c.toLowerCase()}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>How many companies do you reach out to per month?</Label>
        <Select value={volume} onValueChange={(v) => setVolume(v ?? "")}>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="Select volume" />
          </SelectTrigger>
          <SelectContent>
            {volumes.map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="h-12 w-full rounded-lg text-base font-semibold"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Join the Early Access Waitlist"}
      </Button>
    </form>
  );
}

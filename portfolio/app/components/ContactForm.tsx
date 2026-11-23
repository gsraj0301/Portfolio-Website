"use client";

import { useState } from "react";
import { supabase, supabaseConfigured } from "@/app/lib/supabase";

type FormState = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setState("sending");

    if (!supabaseConfigured()) {
      setState("error");
      return;
    }

    const { error } = await supabase.from("contacts").insert([
      { name: name.trim(), email: email.trim(), message: message.trim() },
    ]);

    if (error) {
      setState("error");
      return;
    }

    setState("ok");
    setName("");
    setEmail("");
    setMessage("");
  }

  const isSending = state === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid grid-cols-1 gap-3 max-w-[46ch]"
    >
      <label className="text-tag block text-ink">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Raj G"
        className="px-4 py-3 rounded-xl border border-ink/30 text-ink focus:outline-none focus:ring-2 focus:ring-tomato"
        disabled={isSending}
        required
      />

      <label className="text-tag block text-ink">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="px-4 py-3 rounded-xl border border-ink/30 text-ink focus:outline-none focus:ring-2 focus:ring-tomato"
        disabled={isSending}
        required
      />

      <label className="text-tag block text-ink">Message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Internship, project, or just want to talk games?"
        rows={4}
        className="px-4 py-3 rounded-xl border border-ink/30 text-ink focus:outline-none focus:ring-2 focus:ring-tomato"
        disabled={isSending}
        required
      />

      <button
        type="submit"
        disabled={isSending}
        className="btn btn-primary min-h-11 text-base"
      >
        {isSending ? "Sending…" : "Send message"}
      </button>

      {state === "ok" && (
        <p className="mt-2 text-small text-ink font-semibold">
          Message sent — I'll get back to you.
        </p>
      )}
      {state === "error" && (
        <p className="mt-2 text-small text-tomato font-semibold">
          Could not send. Email me at gsraj.developer@gmail.com instead.
        </p>
      )}
    </form>
  );
}

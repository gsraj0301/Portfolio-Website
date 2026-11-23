"use client";

import { useState } from "react";
import { supabase, supabaseConfigured } from "@/app/lib/supabase";

type FormState = "idle" | "sending" | "ok" | "error";

const inputClass =
  "w-full rounded-xl border-2 border-ink bg-card px-4 py-3 text-ink placeholder:text-ink-soft/70";

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
      className="mt-10 grid max-w-[46ch] grid-cols-1 gap-2"
    >
      <p className="bricolage text-h3">Or leave a message</p>

      <label htmlFor="contact-name" className="text-tag mt-2 font-semibold">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className={inputClass}
        disabled={isSending}
        required
      />

      <label htmlFor="contact-email" className="text-tag mt-2 font-semibold">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className={inputClass}
        disabled={isSending}
        required
      />

      <label htmlFor="contact-message" className="text-tag mt-2 font-semibold">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Internship, project, or just want to talk games?"
        rows={4}
        className={inputClass}
        disabled={isSending}
        required
      />

      <button
        type="submit"
        disabled={isSending}
        className="btn btn-on-fill mt-3 min-h-11 justify-self-start text-base"
      >
        {isSending ? "Sending..." : "Send message"}
      </button>

      {state === "ok" ? (
        <p
          role="status"
          className="mt-2 rounded-xl border-2 border-ink bg-card px-4 py-3 text-small font-semibold text-ink"
        >
          Message sent. I&rsquo;ll get back to you.
        </p>
      ) : null}
      {state === "error" ? (
        <p
          role="alert"
          className="mt-2 rounded-xl border-2 border-ink bg-card px-4 py-3 text-small font-semibold text-ink"
        >
          Could not send. Email me at gsraj.developer@gmail.com instead.
        </p>
      ) : null}
    </form>
  );
}

"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { supabase, supabaseConfigured } from "@/app/lib/supabase";

type FormState = "idle" | "sending" | "ok" | "error";
type FieldErrors = { name?: string; email?: string; message?: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "mt-2 min-h-[48px] w-full rounded-[10px] border-2 border-ink bg-card px-4 py-3 text-base text-ink";

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-ink">
      <AlertCircle size={16} aria-hidden="true" />
      {message}
    </p>
  );
}

function FieldWrapper({ children, errorKey, errors }: { children: React.ReactNode; errorKey: keyof FieldErrors; errors: FieldErrors }) {
  const shouldShake = !!errors[errorKey];
  return (
    <div className={shouldShake ? "shake" : ""} key={errors[errorKey] ? "shake" : "stable"}>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const isSending = state === "sending";

  function validate(): FieldErrors {
    const next: FieldErrors = {};

    if (!name.trim()) next.name = "Tell me your name.";
    if (!email.trim()) next.email = "Add an email so I can reply.";
    else if (!EMAIL_PATTERN.test(email.trim()))
      next.email = "That email looks incomplete.";

    if (!message.trim()) next.message = "Add a short message.";
    else if (message.trim().length > 1000)
      next.message = "Keep it under 1,000 characters.";

    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (website.trim()) {
      setState("ok");
      return;
    }

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

  if (state === "ok") {
    return (
      <div className="sticker-lg p-6 sm:p-8 pop-in" role="status">
        <p className="bricolage text-h3">Got it. I&rsquo;ll reply soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="sticker-lg p-6 sm:p-8">
      <p className="bricolage text-h3">Or leave a message</p>

      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <FieldWrapper errorKey="name" errors={errors}>
        <div className="mt-5">
          <label htmlFor="contact-name" className="text-tag font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            disabled={isSending}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            required
          />
          {errors.name ? (
            <FieldError id="contact-name-error" message={errors.name} />
          ) : null}
        </div>
      </FieldWrapper>

      <FieldWrapper errorKey="email" errors={errors}>
        <div className="mt-4">
          <label htmlFor="contact-email" className="text-tag font-medium">
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
            className={inputClass}
            disabled={isSending}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            required
          />
          {errors.email ? (
            <FieldError id="contact-email-error" message={errors.email} />
          ) : null}
        </div>
      </FieldWrapper>

      <FieldWrapper errorKey="message" errors={errors}>
        <div className="mt-4">
          <label htmlFor="contact-message" className="text-tag font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            maxLength={1000}
            className={inputClass}
            disabled={isSending}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            required
          />
          {errors.message ? (
            <FieldError id="contact-message-error" message={errors.message} />
          ) : null}
        </div>
      </FieldWrapper>

      <button
        type="submit"
        disabled={isSending}
        aria-busy={isSending}
        className="btn btn-primary mt-5 min-h-[48px] w-full text-base sm:w-auto"
      >
        {isSending ? "Sending" : "Send message"}
      </button>

      <p className="text-small mt-3 text-ink-soft">
        I&rsquo;ll only use your email to reply to you.
      </p>

      {state === "error" ? (
        <p role="alert" className="mt-3 flex items-start gap-2 text-sm text-ink">
          <AlertCircle
            size={16}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <span>
            The send did not go through. Email me at{" "}
            <a
              href="mailto:gsraj.developer@gmail.com"
              className="font-semibold underline decoration-2 underline-offset-4"
            >
              gsraj.developer@gmail.com
            </a>{" "}
            instead.
          </span>
        </p>
      ) : null}
    </form>
  );
}
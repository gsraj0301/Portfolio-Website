import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Raj G",
};

export default function NotFound() {
  return (
    <main className="shell flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <div
        className="sticker w-full max-w-md p-8"
        style={{ "--tilt": "-1.5deg" } as React.CSSProperties}
      >
        <p className="tag inline-flex">404</p>
        <h1 className="text-h2 mt-4">Page not found</h1>
        <p className="text-small mt-3 text-ink-soft">
          This sticker fell off the board.
        </p>
        <Link href="/" className="btn btn-primary mt-6">
          Go home
        </Link>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Cai's Blog",
  description: "Landing page and blog built with Next.js"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-8 sm:px-10">
          <header className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex h-9 w-9 items-center justify-center rounded bg-brand-blue text-sm font-semibold !text-white"
              >
                JC
              </Link>
              <div className="h-4 w-px bg-slate-200" />
              <nav className="flex gap-6 text-sm text-slate-700">
                <Link href="/" className="transition-colors hover:text-slate-900">
                  About
                </Link>
                <Link href="/blog" className="transition-colors hover:text-slate-900">
                  Work
                </Link>
                <Link href="/blog" className="transition-colors hover:text-slate-900">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-slate-700"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-slate-700"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:"
                className="text-slate-400 transition-colors hover:text-slate-700"
                aria-label="Email"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-20 border-t border-slate-200 pt-6 text-sm text-slate-400">
            © {new Date().getFullYear()} James Cai
          </footer>
        </div>
      </body>
    </html>
  );
}

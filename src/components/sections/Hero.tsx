'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/data/social';

const roles = ['Backend Engineer', 'Distributed Systems', 'Cloud Systems', 'AI Engineering'];
const terminalLines = [
  '$ architect scalable-systems --focus latency reliability',
  '> shipping event-driven platforms, ML integrations, and workflow automation',
  '> current stack: Java · Spring Boot · Kafka · Redis · PostgreSQL · GCP · AWS',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]"
      />

      <div
        className={[
          'relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8',
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sourabh Chaudhary
          </h1>

          <p className="mt-5 text-lg font-medium text-blue-400 sm:text-xl">
            Senior Software Engineer
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            {roles.map((role, index) => (
              <span key={role} className="inline-flex items-center gap-2">
                {role}
                {index < roles.length - 1 ? <span className="text-zinc-700">·</span> : null}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Building scalable backend systems, distributed architectures, and AI-powered applications for high-throughput, production-critical workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href="/resume" variant="secondary">Resume</Button>
            <Button href={GITHUB_URL} external variant="secondary">GitHub</Button>
            <Button href={LINKEDIN_URL} external variant="secondary">LinkedIn</Button>
          </div>

          <div className="mt-6 text-sm text-zinc-500">
            Contact: <a className="text-zinc-300 hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-blue-950/10 backdrop-blur">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">system / overview</p>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="rounded-xl border border-zinc-800 bg-[#0b0f1a] p-4">
                <p className="mb-3 text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">terminal</p>
                <div className="space-y-2 font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
                  {terminalLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">focus areas</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    <li>Distributed systems</li>
                    <li>ML workflow integration</li>
                    <li>Event-driven architecture</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">operating mode</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    <li>Latency-aware design</li>
                    <li>Observability-first delivery</li>
                    <li>AI-assisted engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none mt-6 text-center text-zinc-700 motion-safe:animate-bounce motion-reduce:animate-none">
            <svg className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

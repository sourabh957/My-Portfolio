'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GITHUB_URL, GITHUB_USERNAME } from '@/data/social';
import { useInView } from '@/hooks/useInView';

const signals = [
  'Backend-focused build logs and repositories',
  'System-design-driven side projects',
  'Public project work as repositories are published',
];

export default function GitHub() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="github">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">GitHub</p>
        <h2 className="mb-3 text-3xl font-semibold text-white sm:text-4xl">Open Source &amp; Projects</h2>
        <p className="mb-8 text-sm text-zinc-500">
          More projects and contributions at{' '}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            github.com/{GITHUB_USERNAME}
          </a>
        </p>

        <Card className="p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Badge variant="accent" className="mb-4">Profile</Badge>
              <p className="max-w-2xl text-sm leading-7 text-zinc-400">
                This portfolio highlights production engineering experience first. GitHub remains the public surface area for experiments, architecture-heavy builds, and future published repositories.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-500">▸</span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 lg:min-w-[280px]">
              <div className="mb-4 flex items-center gap-3">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.79-.26.79-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.57A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
                </svg>
                <div>
                  <p className="font-medium text-white">@{GITHUB_USERNAME}</p>
                  <p className="text-xs font-mono text-zinc-500">Public engineering footprint</p>
                </div>
              </div>
              <Button href={GITHUB_URL} external variant="secondary" className="w-full">
                View GitHub Profile
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/data/social';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="contact">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <Card className="border-blue-500/10 bg-gradient-to-br from-zinc-900/80 to-[#0a1020] p-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Contact</p>
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s connect</h2>
          <p className="mb-8 max-w-2xl text-zinc-400 leading-8">
            Open to senior engineering roles, AI engineering opportunities, FDE positions, and consulting engagements.
          </p>

          <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
            Preferred contact: <a href={`mailto:${EMAIL}`} className="text-blue-400 hover:text-blue-300">{EMAIL}</a>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href={LINKEDIN_URL} external variant="secondary">LinkedIn →</Button>
            <Button href={GITHUB_URL} external variant="secondary">GitHub →</Button>
            <Button href={`mailto:${EMAIL}`}>Email →</Button>
            <Button href="/resume" variant="ghost">Resume Overview →</Button>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

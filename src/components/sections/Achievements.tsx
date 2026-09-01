'use client';

import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { achievements } from '@/data/achievements';
import { useInView } from '@/hooks/useInView';

function AchievementIcon({ icon }: { icon: string }) {
  const className = 'h-5 w-5 text-blue-400';

  switch (icon) {
    case 'star':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 2.72 5.51 6.08.88-4.4 4.29 1.04 6.06L12 16.89l-5.44 2.88 1.04-6.06-4.4-4.29 6.08-.88L12 3Z" />
        </svg>
      );
    case 'trophy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Zm10 1h3v2a4 4 0 0 1-4 4h-1M7 5H4v2a4 4 0 0 0 4 4h1" />
        </svg>
      );
    case 'code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-4 3 4 3m8-6 4 3-4 3m-3-8-2 10" />
        </svg>
      );
    case 'zap':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.75 14.18 10l4.69.68-3.39 3.31.8 4.67L12 16.38l-4.28 2.28.82-4.67-3.4-3.31 4.7-.68L12 5.75Z" />
        </svg>
      );
  }
}

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="achievements">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Achievements</p>
        <h2 className="mb-10 text-3xl font-semibold text-white sm:text-4xl">Recognition &amp; Competition</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="h-full">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <AchievementIcon icon={achievement.icon} />
              </div>
              <h3 className="font-semibold text-white">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

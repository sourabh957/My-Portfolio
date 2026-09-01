'use client';

import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { useInView } from '@/hooks/useInView';

const principles = [
  {
    label: 'Scalability',
    description:
      "Design for growth. Whether it's 4 lakh+ events/day or 300+ configuration rules, the system should handle load without fragility.",
  },
  {
    label: 'Observability',
    description:
      "If you can't see it, you can't debug it. I integrate monitoring, tracing, and alerting as first-class concerns — not afterthoughts.",
  },
  {
    label: 'Reliability',
    description:
      'Zero-downtime rollouts, idempotent operations, and graceful degradation matter more than clever abstractions.',
  },
  {
    label: 'Clean Architecture',
    description:
      'Separation of concerns, dependency inversion, and well-defined service boundaries keep codebases maintainable as they grow.',
  },
  {
    label: 'AI-Assisted Engineering',
    description:
      'I use Claude Code with MCP tooling to compress development cycles — from design to working, tested code in hours, not days.',
  },
];

export default function HowIBuild() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="how-i-build">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Engineering Philosophy</p>
        <h2 className="mb-10 text-3xl font-semibold text-white sm:text-4xl">How I Build</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle.label}>
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-sm text-blue-500">▸</span>
                <h3 className="font-semibold text-white">{principle.label}</h3>
              </div>
              <p className="text-sm leading-7 text-zinc-400">{principle.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

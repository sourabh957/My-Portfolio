'use client';

import { Card } from '@/components/ui/Card';
import { metrics } from '@/data/metrics';
import { useInView } from '@/hooks/useInView';

export default function ImpactMetrics() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="impact" className="border-y border-zinc-800/60 bg-zinc-900/20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={[
            'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
          ].join(' ')}
        >
          <p className="mb-2 text-center font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Engineering Impact</p>
          <h2 className="mb-10 text-center text-2xl font-semibold text-white sm:text-3xl">Systems &amp; Numbers</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {metrics.map((metric) => (
              <Card key={`${metric.value}-${metric.label}`} className="flex h-full flex-col justify-between text-center">
                <div className="font-mono text-2xl font-semibold text-white sm:text-3xl">{metric.value}</div>
                <div className="mt-2 text-xs leading-5 text-zinc-500">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

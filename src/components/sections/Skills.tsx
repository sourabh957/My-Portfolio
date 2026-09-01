'use client';

import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { skillCategories } from '@/data/skills';
import { useInView } from '@/hooks/useInView';

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="skills">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Technical Skills</p>
        <h2 className="mb-10 text-3xl font-semibold text-white sm:text-4xl">What I work with</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">{category.name}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-zinc-800/70 px-2.5 py-1 text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

'use client';

import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { labProjects } from '@/data/lab';
import { useInView } from '@/hooks/useInView';

export default function EngineeringLab() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="lab">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Engineering Lab</p>
        <h2 className="mb-3 text-3xl font-semibold text-white sm:text-4xl">Building in Public</h2>
        <p className="mb-10 text-sm text-zinc-500">Projects I&apos;m designing or planning to build.</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labProjects.map((project) => (
            <Card key={project.id} className="h-full">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <span className="shrink-0 rounded-md border border-zinc-800 px-2 py-1 font-mono text-xs text-zinc-500">
                  Planned
                </span>
              </div>
              <p className="text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Concepts</p>
                <div className="flex flex-wrap gap-2">
                  {project.concepts.map((concept) => (
                    <Badge key={concept} variant="outline">{concept}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              {'subProjects' in project && project.subProjects ? (
                <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Includes</p>
                  <div className="space-y-3">
                    {project.subProjects.map((subProject) => (
                      <div key={subProject.title}>
                        <p className="text-sm font-medium text-zinc-200">{subProject.title}</p>
                        <p className="mt-1 text-xs leading-6 text-zinc-400">{subProject.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

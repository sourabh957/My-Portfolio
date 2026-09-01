'use client';

import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { projects, type ProjectStatus } from '@/data/projects';
import { useInView } from '@/hooks/useInView';

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  building: {
    label: 'Building',
    className: 'border border-yellow-500/20 bg-yellow-500/10 text-yellow-300',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'border border-blue-500/20 bg-blue-500/10 text-blue-300',
  },
  planned: {
    label: 'Planned',
    className: 'border border-zinc-700 bg-zinc-800/60 text-zinc-300',
  },
  completed: {
    label: 'Completed',
    className: 'border border-green-500/20 bg-green-500/10 text-green-300',
  },
};

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="projects">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Projects</p>
        <h2 className="mb-10 text-3xl font-semibold text-white sm:text-4xl">Featured Projects</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.filter((project) => project.featured).map((project) => {
            const status = statusConfig[project.status];
            const architecture = project.architecture ?? [];

            return (
              <Card key={project.id} className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{project.description}</p>
                  </div>
                  <span className={`shrink-0 rounded-md px-2 py-1 text-xs ${status.className}`}>{status.label}</span>
                </div>

                {project.problem ? (
                  <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Problem</p>
                    <p className="text-sm leading-7 text-zinc-400">{project.problem}</p>
                  </div>
                ) : null}

                {project.architecture ? (
                  <div className="mb-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Architecture</p>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-zinc-300">
                      {architecture.map((layer, index) => (
                        <span key={layer} className="flex items-center gap-1.5">
                          <span className="rounded-md bg-zinc-800 px-2 py-1">{layer}</span>
                          {index < architecture.length - 1 ? <span className="text-zinc-600">→</span> : null}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {project.concepts ? (
                  <div className="mb-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Key Concepts</p>
                    <div className="flex flex-wrap gap-2">
                      {project.concepts.map((concept) => (
                        <Badge key={concept} variant="outline">{concept}</Badge>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-zinc-700 px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                      View on GitHub →
                    </a>
                  ) : (
                    <span className="rounded-md border border-zinc-800 px-3 py-2 text-xs text-zinc-600">
                      GitHub — Coming Soon
                    </span>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-zinc-700 px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                      Live Demo →
                    </a>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

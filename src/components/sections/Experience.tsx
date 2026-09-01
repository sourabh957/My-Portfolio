'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { experiences } from '@/data/experience';
import { useInView } from '@/hooks/useInView';

export default function Experience() {
  const { ref, inView } = useInView();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ '0-0': true, '1-0': true });

  const toggle = (id: string) => {
    setExpanded((previous) => ({ ...previous, [id]: !previous[id] }));
  };

  return (
    <SectionContainer id="experience">
      <div
        ref={ref}
        className={[
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Experience</p>
        <h2 className="mb-12 text-3xl font-semibold text-white sm:text-4xl">Where I&apos;ve worked</h2>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-3 hidden w-px bg-zinc-800 sm:block" />
          <div className="space-y-12">
            {experiences.map((experience, experienceIndex) => (
              <div key={`${experience.company}-${experience.role}`} className="relative sm:pl-12">
                <div className="absolute left-[11px] top-3 hidden h-3 w-3 rounded-full border-2 border-[#0a0a0f] bg-blue-500 sm:block" />

                <div className="mb-4">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                    {experience.client ? <span className="text-sm text-zinc-500">· Client: {experience.client}</span> : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-blue-400">{experience.role}</p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">{experience.duration} · {experience.location}</p>
                </div>

                <div className="space-y-4">
                  {experience.highlights.map((highlight, highlightIndex) => {
                    const key = `${experienceIndex}-${highlightIndex}`;
                    const isOpen = expanded[key] ?? false;

                    return (
                      <Card key={highlight.title} className="p-0">
                        <button
                          className="w-full px-5 py-4 text-left"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-medium text-white">{highlight.title}</h4>
                              <p className="mt-1 text-sm text-zinc-500">Tap to inspect architecture impact and delivery details.</p>
                            </div>
                            <svg
                              className={[
                                'mt-1 h-4 w-4 shrink-0 text-zinc-500 motion-safe:transition-transform motion-safe:duration-200 motion-reduce:transition-none',
                                isOpen ? 'rotate-180' : 'rotate-0',
                              ].join(' ')}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>

                        {isOpen ? (
                          <div className="border-t border-zinc-800 px-5 pb-5 pt-4">
                            <p className="text-sm leading-7 text-zinc-400">{highlight.description}</p>
                            <div className="mt-4">
                              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Impact</p>
                              <ul className="space-y-2">
                                {highlight.impact.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                                    <span className="mt-1 text-blue-500">→</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {highlight.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

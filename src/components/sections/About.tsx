'use client';

import { Card } from '@/components/ui/Card';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();

  return (
    <SectionContainer id="about">
      <div
        ref={ref}
        className={[
          'grid items-start gap-12 lg:grid-cols-2',
          'motion-safe:transition-all motion-safe:duration-700 motion-reduce:transition-none',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        ].join(' ')}
      >
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">About</p>
          <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">Engineering systems that scale.</h2>
          <div className="space-y-4 text-zinc-400 leading-8">
            <p>
              I&apos;m Sourabh — a backend engineer with ~4 years of experience building distributed systems,
              event-driven pipelines, and cloud-native applications. Currently working as a Senior Software
              Engineer at StatusNeo, embedded with Piramal Finance.
            </p>
            <p>
              I work primarily in Java and Spring Boot, building systems that handle real production load:
              payment reconciliation, ML model integration, configurable rule engines, and Kafka-based
              event pipelines. I&apos;ve shipped across AWS and GCP, and I care deeply about reliability,
              observability, and clean architecture.
            </p>
            <p>
              Lately, I&apos;ve been exploring AI engineering — building agents, integrating LLMs into workflows,
              and using AI-assisted development to accelerate engineering cycles.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <Card>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Current role</p>
            <p className="font-medium text-white">Senior Software Engineer (SDE II)</p>
            <p className="mt-1 text-sm text-zinc-400">StatusNeo · Piramal Finance · Bangalore</p>
          </Card>
          <Card>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Experience</p>
            <p className="font-medium text-white">~4 Years</p>
            <p className="mt-1 text-sm text-zinc-400">Backend · Distributed Systems · Cloud · AI</p>
          </Card>
          <Card>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Education</p>
            <p className="font-medium text-white">B.E. Information Science Engineering</p>
            <p className="mt-1 text-sm text-zinc-400">Ramaiah Institute of Technology · CGPA: 8.19 · 2022</p>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}

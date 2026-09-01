import type { Metadata } from 'next';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { achievements } from '@/data/achievements';
import { experiences } from '@/data/experience';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/data/social';

export const metadata: Metadata = {
  title: 'Resume Overview — Sourabh Chaudhary',
  description: 'Resume overview for Sourabh Chaudhary.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16 text-zinc-100">
      <SectionContainer className="py-0">
        <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-2xl shadow-blue-950/10">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Resume Overview</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Sourabh Chaudhary</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Backend engineer focused on distributed systems, cloud-native platforms, and AI-assisted engineering workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
            <a className="rounded-md border border-zinc-800 px-3 py-2 hover:border-zinc-700 hover:text-white" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="rounded-md border border-zinc-800 px-3 py-2 hover:border-zinc-700 hover:text-white" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-md border border-zinc-800 px-3 py-2 hover:border-zinc-700 hover:text-white" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">Experience Highlights</h2>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={`${experience.company}-${experience.role}`} className="border-b border-zinc-800 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-base font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm text-blue-400">{experience.company}{experience.client ? ` · ${experience.client}` : ''}</p>
                  <p className="mt-1 text-xs font-mono text-zinc-500">{experience.duration} · {experience.location}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight.title}>• {highlight.title}: {highlight.description}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Education</h2>
              <p className="text-sm text-zinc-300">B.E. Information Science Engineering</p>
              <p className="mt-1 text-sm text-zinc-400">Ramaiah Institute of Technology · CGPA 8.19 · 2022</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Selected Achievements</h2>
              <ul className="space-y-3 text-sm leading-6 text-zinc-400">
                {achievements.map((achievement) => (
                  <li key={achievement.title}>• <span className="text-zinc-200">{achievement.title}</span> — {achievement.description}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-sm text-amber-100">
              A downloadable PDF resume was not provided in the source files, so this page serves as the portfolio&apos;s resume view.
            </div>
          </section>
        </div>
      </SectionContainer>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { achievements } from '@/data/achievements';
import { experiences } from '@/data/experience';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, UPWORK_URL } from '@/data/social';

export const metadata: Metadata = {
  title: 'Resume Overview — Sourabh Chaudhary',
  description: 'Resume overview for Sourabh Chaudhary.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#07100d] pt-12 pb-16 text-[#f2f6f3]">
      <SectionContainer className="py-0">
        <Link href="/" className="mb-7 inline-flex text-xs font-medium text-[#9ef7bd] transition-colors hover:text-white">← Back to portfolio</Link>
        <div className="mb-10 rounded-2xl border border-emerald-100/15 bg-[#0b1713] p-8 shadow-2xl shadow-emerald-950/10">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[#809188]">Resume Overview</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Sourabh Chaudhary</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#a4b2aa] sm:text-base">
            Java backend engineer focused on Spring Boot services, event-driven systems, performance, and reliable cloud delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#c5d0ca]">
            <a className="rounded-md border border-emerald-100/15 px-3 py-2 hover:border-[#9ef7bd]/50 hover:text-white" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="rounded-md border border-emerald-100/15 px-3 py-2 hover:border-[#9ef7bd]/50 hover:text-white" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-md border border-emerald-100/15 px-3 py-2 hover:border-[#9ef7bd]/50 hover:text-white" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-md border border-[#9ef7bd] bg-[#9ef7bd] px-3 py-2 font-semibold text-[#07100d] hover:bg-[#b6facd]" href={UPWORK_URL} target="_blank" rel="noreferrer">
              Upwork
            </a>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-emerald-100/15 bg-[#0b1713]/90 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">Experience Highlights</h2>
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={`${experience.company}-${experience.role}`} className="border-b border-emerald-100/10 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-base font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm text-[#9ef7bd]">{experience.company}{experience.client ? ` · ${experience.client}` : ''}</p>
                  <p className="mt-1 text-xs font-mono text-[#74867b]">{experience.duration} · {experience.location}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#a4b2aa]">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight.title}>• {highlight.title}: {highlight.description}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="rounded-2xl border border-emerald-100/15 bg-[#0b1713]/90 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Education</h2>
              <p className="text-sm text-[#d4ddd7]">B.E. Information Science Engineering</p>
              <p className="mt-1 text-sm text-[#9aa9a0]">Ramaiah Institute of Technology · CGPA 8.19 · 2022</p>
            </div>

            <div className="rounded-2xl border border-emerald-100/15 bg-[#0b1713]/90 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Selected Achievements</h2>
              <ul className="space-y-3 text-sm leading-6 text-[#9aa9a0]">
                {achievements.map((achievement) => (
                  <li key={achievement.title}>• <span className="text-[#dce4df]">{achievement.title}</span> — {achievement.description}</li>
                ))}
              </ul>
            </div>

          </section>
        </div>
      </SectionContainer>
    </main>
  );
}

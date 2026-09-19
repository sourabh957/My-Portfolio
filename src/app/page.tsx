import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import { credentials } from '@/data/credentials';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, UPWORK_URL } from '@/data/social';

const services = [
  {
    number: '01',
    title: 'Build your backend',
    description: 'Java and Spring Boot APIs, database design, third-party integrations, and maintainable service boundaries.',
    tags: 'REST APIs / PostgreSQL / Spring Boot',
  },
  {
    number: '02',
    title: 'Fix what is slowing you down',
    description: 'Trace failing requests, investigate slow queries, tune Redis caching, and make existing services easier to operate.',
    tags: 'Debugging / Performance / Redis',
  },
  {
    number: '03',
    title: 'Connect and ship your systems',
    description: 'Kafka integrations, event-driven workflows, Docker packaging, and deployment troubleshooting on AWS or GCP.',
    tags: 'Kafka / Docker / AWS and GCP',
  },
];

const results = [
  { value: '40%', label: 'lower inter-service latency', context: 'StatusNeo - Piramal Finance' },
  { value: '400K+', label: 'partner events handled daily', context: 'Porter - Rewards and Recognition' },
  { value: '45%', label: 'faster reconciliation processing', context: 'Porter - Redis and PostgreSQL' },
  { value: '70%', label: 'less model-onboarding effort', context: 'StatusNeo - Configuration platform' },
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div>
            <p className="availability"><span /> Available for freelance projects</p>
            <p className="eyebrow hero-name">SOURABH CHAUDHARY / JAVA BACKEND ENGINEER</p>
            <h1 id="hero-title">Your backend.<br /><span className="accent-text">Built to deliver.</span></h1>
            <p className="hero-copy">I build Java APIs, untangle slow services, and connect event-driven systems - bringing production experience from lending and logistics to your next project.</p>
            <div className="actions">
              <a className="action primary" href={UPWORK_URL} target="_blank" rel="noopener noreferrer">Hire me on Upwork <span aria-hidden="true">↗</span></a>
              <a className="action secondary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-footnote">4+ years in backend engineering <span aria-hidden="true">·</span> Bengaluru, India</p>
          </div>
          <aside className="system-panel" aria-label="Backend engineering focus">
            <div className="panel-top"><span className="eyebrow">FROM REQUEST TO RELIABLE RESPONSE</span><span className="system-dot" aria-hidden="true" /></div>
            <div className="request-line"><span className="method">POST</span><span>/your-next-project</span><span className="code-mark" aria-hidden="true">↗</span></div>
            <div className="system-core"><span className="core-icon" aria-hidden="true">SC</span><div><strong>Java + Spring Boot</strong><p>APIs and service orchestration</p></div></div>
            <div className="system-branches" aria-hidden="true"><span /><span /><span /></div>
            <div className="system-nodes"><div><span className="node-symbol" aria-hidden="true">≋</span><strong>Kafka</strong><small>Events</small></div><div><span className="node-symbol" aria-hidden="true">◈</span><strong>Redis</strong><small>Caching and ranking</small></div><div><span className="node-symbol" aria-hidden="true">▤</span><strong>PostgreSQL</strong><small>Persistence</small></div></div>
            <div className="panel-bottom"><span>API design → implementation → handoff</span><span aria-hidden="true">✓</span></div>
          </aside>
        </section>

        <div className="experience-strip"><div className="shell"><span className="eyebrow">PRODUCTION EXPERIENCE</span><span>StatusNeo <small>for Piramal Finance</small></span><span>Porter <small>logistics at scale</small></span><a href="#experience">View background <span aria-hidden="true">↗</span></a></div></div>

        <section id="services" className="section shell">
          <div className="section-heading"><div><p className="eyebrow">HOW I CAN HELP</p><h2>Backend delivery.<br />And backend rescue.</h2></div><p>Starting from a brief or an existing codebase? I can help you get the next useful piece shipped.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="item-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><div className="service-tags">{service.tags}</div></article>)}</div>
        </section>

        <section className="results-band" aria-labelledby="results-title"><div className="shell"><div className="results-intro"><h2 id="results-title">Experience with measurable impact.</h2><p>Selected results from my employment - not benchmarks for the projects below.</p></div><div className="results-grid">{results.map((result) => <div className="result" key={result.label}><strong>{result.value}</strong><span>{result.label}</span><small>{result.context}</small></div>)}</div></div></section>

        <section id="projects" className="section shell">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01-04</p><h2>Read the code.<br />See the decisions.</h2></div><p>Public backend projects with source, setup instructions, and API examples. Built to demonstrate specific engineering skills.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article key={project.id} className="project-card">
            <div className="project-top"><span className="eyebrow">0{index + 1} / {project.category}</span><span className="project-type">{project.kind}</span></div>
            <h3>{project.title}</h3><p className="project-description">{project.description}</p>
            <div className="architecture" aria-label={`${project.title} architecture`}>{project.architecture.map((node, i) => <span key={node}>{i > 0 ? <i aria-hidden="true">→</i> : null}<b>{node}</b></span>)}</div>
            <ul className="project-features">{project.concepts.map((concept) => <li key={concept}>{concept}</li>)}</ul>
            <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="project-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source and documentation on GitHub`}>Source and documentation <span aria-hidden="true">↗</span></a>
          </article>)}</div>
          <div className="secondary-work"><div><span className="eyebrow">ALSO EXPLORING / AI ENGINEERING</span><h3>AI Tax Agent</h3><p>An in-progress exploration of document retrieval and LLM workflows. AI is an additional capability; Java backend engineering is my core focus.</p></div><a className="action secondary" href="https://github.com/sourabh957/ai-tax-agent" target="_blank" rel="noopener noreferrer">Explore repository ↗</a></div>
        </section>

        <section id="experience" className="section shell section-rule">
          <div className="section-heading"><div><p className="eyebrow">BEHIND THE CODE</p><h2>Production experience.<br />Practical perspective.</h2></div><p>From lending decision systems to partner-facing logistics platforms. I bring that context to API design, debugging, and delivery.</p></div>
          <div className="career-list">{experiences.map((experience) => <article className="career" key={experience.company}><div className="career-meta"><p className="eyebrow">{experience.duration}</p><h3>{experience.company}</h3><p>{experience.role}</p>{experience.client ? <small>Client: {experience.client}</small> : null}</div><div className="career-details">{experience.highlights.map((highlight) => <details key={highlight.title}><summary>{highlight.title}<span aria-hidden="true">+</span></summary><p>{highlight.description}</p><ul>{highlight.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul></details>)}</div></article>)}</div>
          <div className="stack-line"><span className="eyebrow">CORE TOOLKIT</span><p>Java · Spring Boot · Kafka · Redis · PostgreSQL · MongoDB · Docker · AWS · GCP · GKE</p><Link href="/resume">Full background ↗</Link></div>
        </section>

        <section id="credentials" className="section shell section-rule">
          <div className="section-heading"><div><p className="eyebrow">CERTIFICATIONS AND COMPETITION AWARDS</p><h2>Proof beyond<br />the project.</h2></div><p>Technical assessments and competitive problem-solving. Each entry links to its certificate or supporting record.</p></div>
          <div className="credential-grid">{credentials.map((credential) => <article className="credential-card" key={credential.id}><a className="certificate-image" href={credential.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${credential.title} certificate`}><Image src={credential.image} alt={`${credential.title} certificate awarded to Sourabh Chaudhary`} width={720} height={490} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></a><div className="credential-body"><p className="eyebrow">{credential.issuer} / {credential.type}</p><h3>{credential.title}</h3><p>{credential.description}</p><a href={credential.url} target="_blank" rel="noopener noreferrer">View certificate <span aria-hidden="true">↗</span></a></div></article>)}</div>
          <a className="text-link certificate-collection" href="https://drive.google.com/drive/folders/1mEoEAX8qVK1PJDyduxTqezlHk50jUP1V?usp=sharing" target="_blank" rel="noopener noreferrer">Browse the complete certificate collection ↗</a>
        </section>

        <section id="contact" className="section shell"><div className="contact-panel"><p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p><h2>A new API?<br />A stubborn backend issue?</h2><p>Tell me what needs to work, what is getting in the way, and your target timeline. We can start with a focused scope and clear deliverables.</p><div className="actions"><a className="action primary" href={UPWORK_URL} target="_blank" rel="noopener noreferrer">Discuss your project on Upwork ↗</a><a className="action secondary" href={`mailto:${EMAIL}`}>Email me ↗</a></div><small>Working together through Upwork? Keep project communication and payments on Upwork.</small></div></section>
      </main>
      <footer className="shell footer"><p><strong>SC<span>.</span></strong> Sourabh Chaudhary <span className="footer-role">/ Java Backend Engineer</span></p><div><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href="/resume">Background ↗</Link><a href="#main-content">Back to top ↑</a></div></footer>
    </>
  );
}

import { GITHUB_URL, LINKEDIN_URL } from '@/data/social';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-zinc-600">Sourabh Chaudhary · {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-600 transition-colors hover:text-zinc-400">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-600 transition-colors hover:text-zinc-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

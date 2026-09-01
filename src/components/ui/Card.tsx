import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(24,24,27,0.4)] backdrop-blur-sm transition-colors hover:border-zinc-700',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

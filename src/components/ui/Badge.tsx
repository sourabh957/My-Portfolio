import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-1 text-[11px] font-medium tracking-wide',
        variant === 'default' && 'bg-zinc-800/80 text-zinc-300',
        variant === 'outline' && 'border border-zinc-700 text-zinc-400',
        variant === 'accent' && 'border border-blue-500/20 bg-blue-500/10 text-blue-400',
        className,
      )}
    >
      {children}
    </span>
  );
}

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className }: SectionContainerProps) {
  return (
    <section id={id} className={cn('mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}

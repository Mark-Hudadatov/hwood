/**
 * SectionShell - Reusable section wrapper for consistent spacing and layout
 */

import { ReactNode } from 'react';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  id?: string;
}

export function SectionShell({
  children,
  className = '',
  containerClassName = '',
  fullWidth = false,
  id,
}: SectionShellProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div
        className={`${
          fullWidth ? 'w-full' : 'section-container'
        } ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

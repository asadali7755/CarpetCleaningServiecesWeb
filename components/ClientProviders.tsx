'use client';
import { ReactNode } from 'react';
import { RequestCallProvider } from './RequestCallModal';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <RequestCallProvider>{children}</RequestCallProvider>;
}

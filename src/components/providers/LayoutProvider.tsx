'use client';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import Navbar from '../atom/Navbar';
import ModalProvider from './ModalProvider';

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ModalProvider>
        <Navbar />
        {children}
      </ModalProvider>
    </ReactQueryProvider>
  );
}

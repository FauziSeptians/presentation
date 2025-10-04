'use client';

import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import { RemoteConfigProvider } from '@/components/providers/RemoteConfigProvider';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import SimpleVideoPlayer from '@/components/atom/SimpleVideoPlayer';
import { TextAnimate } from '../ui/text-animate';
import { useRemoteConfigStore } from '@/stores/useRemoteConfigStore';

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReactQueryProvider>
        <RemoteConfigProvider>{children}</RemoteConfigProvider>
      </ReactQueryProvider>
      <SmoothCursor />
    </>
  );
}

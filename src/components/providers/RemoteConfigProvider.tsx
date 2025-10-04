'use client';

import { useRemoteConfigs } from '@/hooks/useRemoteConfigs';
import { useRemoteConfigStore } from '@/stores/useRemoteConfigStore';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export function RemoteConfigProvider({ children }: Props) {
  const { data, isLoading } = useRemoteConfigs(['portofolio', 'musicPlayer']);
  console.log(data);
  const setData = useRemoteConfigStore((s) => s.setData);
  const setLoading = useRemoteConfigStore((s) => s.setLoading);

  console.log('data', data);

  useEffect(() => {
    setLoading(false);
    if (data) setData(data);
  }, [data, isLoading, setData, setLoading]);

  return <>{children}</>;
}

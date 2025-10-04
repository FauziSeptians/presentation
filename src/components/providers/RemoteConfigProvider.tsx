"use client";

import { useRemoteConfigs } from '@/hooks/useRemoteConfigs';
import { useRemoteConfigStore } from '@/stores/useRemoteConfigStore';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export function RemoteConfigProvider({ children }: Props) {
  const { data, isLoading } = useRemoteConfigs(['banner']);
  const setData = useRemoteConfigStore((s) => s.setData);
  const setLoading = useRemoteConfigStore((s) => s.setLoading);

  useEffect(() => {
    setLoading(isLoading);
    if (data) setData(data);
  }, [data, isLoading, setData, setLoading]);

  return <>{children}</>;
}

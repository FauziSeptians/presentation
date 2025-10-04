// stores/remoteConfigStore.ts
import { ResponseRemoteConfig } from '@/hooks/useRemoteConfigs';
import { create } from 'zustand';

type RemoteConfigState = {
  data: ResponseRemoteConfig | null;
  isLoading: boolean;
  setData: (data: ResponseRemoteConfig) => void;
  setLoading: (loading: boolean) => void;
};

export const useRemoteConfigStore = create<RemoteConfigState>((set) => ({
  data: null,
  isLoading: true,
  setData: (data) => set({ data }),
  setLoading: (isLoading) => set({ isLoading }),
}));

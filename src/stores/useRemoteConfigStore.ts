// stores/remoteConfigStore.ts
import { create } from 'zustand';

type RemoteConfigState = {
  data: Record<string, string | boolean | number> | null;
  isLoading: boolean;
  setData: (data: Record<string, string | boolean | number>) => void;
  setLoading: (loading: boolean) => void;
};

export const useRemoteConfigStore = create<RemoteConfigState>((set) => ({
  data: null,
  isLoading: true,
  setData: (data) => set({ data }),
  setLoading: (isLoading) => set({ isLoading }),
}));

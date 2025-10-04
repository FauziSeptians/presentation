// hooks/useRemoteConfigs.ts
import { useQuery } from '@tanstack/react-query';
import { remoteConfig } from '../lib/firebase';
import { fetchAndActivate, getBoolean, getString } from 'firebase/remote-config';

export type ResponseRemoteConfig = {
  banner: boolean;
  [key: string]: string | number | boolean;
};

export function useRemoteConfigs(keys: string[]) {
  return useQuery<ResponseRemoteConfig, Error>({
    queryKey: ['remoteConfig', ...keys],
    queryFn: async (): Promise<ResponseRemoteConfig> => {
      await fetchAndActivate(remoteConfig);
      const result: ResponseRemoteConfig = { banner: false };
      keys.forEach((key) => {
        if (key === 'banner') {
          result[key] = getBoolean(remoteConfig, key);
        } else {
          result[key] = getString(remoteConfig, key);
        }
      });
      return result;
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
}

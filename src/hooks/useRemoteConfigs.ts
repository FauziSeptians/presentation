// hooks/useRemoteConfigs.ts
import { useQuery } from '@tanstack/react-query';
import { remoteConfig } from '../lib/firebase';
import {
  fetchAndActivate,
  getBoolean,
  getString,
} from 'firebase/remote-config';

export type ResponseRemoteConfig = {
  musicPlayer: boolean;
  portofolio: boolean;
  [key: string]: string | number | boolean;
};

export function useRemoteConfigs(keys: string[]) {
  return useQuery<ResponseRemoteConfig, Error>({
    queryKey: ['remoteConfig', ...keys],
    queryFn: async (): Promise<ResponseRemoteConfig> => {
      await fetchAndActivate(remoteConfig);
      const result: ResponseRemoteConfig = {
        musicPlayer: false,
        portofolio: false,
      };
      keys.forEach((key) => {
        result[key] = getBoolean(remoteConfig, key);
      });
      console.log(result);
      return result;
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
}

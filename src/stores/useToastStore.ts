import { create } from 'zustand';

type ToastState = {
  message: string;
  visible: boolean;
  showToast: (message: string) => void;
  hideToast: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
  message: '',
  visible: false,
  showToast: (message: string) => {
    set({ message, visible: true });

    setTimeout(() => {
      set({ visible: false });
    }, 3000);
  },
  hideToast: () => set({ visible: false }),
}));

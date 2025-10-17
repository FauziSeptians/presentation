'use client';

import Toast from '../atom/Toast';

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toast />
    </>
  );
}

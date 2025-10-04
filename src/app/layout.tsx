import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { classNames } from '@/utils/classNames';
import LayoutProvider from '@/components/providers/LayoutProvider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'], // tambahkan variasi berat jika perlu
});

export const metadata: Metadata = {
  title: 'Portofolio',
  description: 'Portofolio pribadi dengan gaya modern dan bersih',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(poppins.variable, 'antialiased')}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}

import LayoutProvider from '@/components/providers/LayoutProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { metadataValue } from '@/data/meta';
import { classNames } from '@/utils/classNames';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = metadataValue;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="yes">
      <body className={classNames(poppins.variable, 'antialiased')}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutProvider>{children}</LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

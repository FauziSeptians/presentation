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
  title: 'Fauziseptians – Frontend Developer',
  description:
    'Portofolio digital Fauzi Septians, seorang frontend developer yang fokus pada desain modern, performa tinggi, dan pengalaman pengguna yang optimal.',
  keywords: [
    'muhammad fauzi septiana putra',
    'Fauziseptians',
    'Fauzi Septians',
    'Frontend Developer',
    'Web Developer',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Portofolio Developer',
    'UI Engineer',
    'JavaScript',
    'CSS',
  ],
  authors: [{ name: 'Fauzi Septians', url: 'https://fauziseptians.com' }],
  creator: 'Fauzi Septians',
  openGraph: {
    title: 'Fauziseptians – Frontend Developer',
    description:
      'Lihat karya dan pengalaman Fauzi Septians sebagai frontend developer yang berfokus pada UI modern dan performa tinggi.',
    url: 'https://fauziseptians.com',
    siteName: 'Fauziseptians Portfolio',
    images: [
      {
        url: 'https://fauziseptians.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fauzi Septians Portfolio',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
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

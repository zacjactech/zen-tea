import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zen Leaf Teas',
  description: 'Discover the Art of Tea with Zen Leaf Teas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f1e8]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Prospect Finder — Trouvez vos clients avec l\'IA',
  description: 'Plateforme SaaS de prospection B2B propulsée par l\'intelligence artificielle.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-dark-900 text-white antialiased">{children}</body>
    </html>
  );
}

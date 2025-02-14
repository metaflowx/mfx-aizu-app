import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ContextProvider from '../context';
import { headers } from 'next/headers';
import { Sidebar } from '@/components/sidebar/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIZU Dashboard',
  description: 'AIZU ICO Dashboard',
};

export default async function RootLayout({children,}: { children: React.ReactNode}) {
     const headersObj =  await headers();
        const cookies = headersObj.get('cookie')
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}  >
        <ContextProvider
          cookies={cookies}
        >
          <div className="flex min-h-screen bg-background">
            <Sidebar className="hidden md:block" />
            <main className="flex-1 p-8 pt-6">
              {children}
            </main>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
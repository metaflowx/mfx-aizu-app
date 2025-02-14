import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';

import ContextProvider from '../context';
import { headers } from 'next/headers';
import { Sidebar } from '@/components/sidebar/sidebar';

const prompt = Prompt({
  subsets: ['latin'], // Optional
  weight: '400',      // Optional
});

export const metadata: Metadata = {
  title: 'AIZU Dashboard',
  description: 'AIZU ICO Dashboard',
};

export default async function RootLayout({children,}: { children: React.ReactNode}) {
     const headersObj =  await headers();
        const cookies = headersObj.get('cookie')
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${prompt.className} dashboardbg`}  >
        <ContextProvider
          cookies={cookies}
        >
          <div className="flex min-h-screen">
            <Sidebar className="hidden md:block" />
            <main className="flex-1 p-8 pt-6 overflow-hidden ">
              {children}
            </main>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}

import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';

import ContextProvider from '../context';
import { headers } from 'next/headers';
import { Sidebar } from '@/components/sidebar/sidebar';
import TopBar from '@/components/sidebar/header';
import { useState } from 'react';
import DashboardCom from './DashboardCom';
import { ToastContainer } from 'react-toastify';

const prompt = Prompt({
  subsets: ['latin'], // Optional
  weight: '400',      // Optional
});

export const metadata: Metadata = {
  title: 'AIZU Dashboard | AIZU ICO Dashboard',
  
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
          <ToastContainer />
            <TopBar />
           <DashboardCom children={children} />
        </ContextProvider>
      </body>
    </html>
  );
}
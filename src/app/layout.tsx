import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";
import { Prompt } from 'next/font/google';
import 'animate.css';
import { headers } from "next/headers";
import ContextProvider from "./context";
// Importing Prompt font
const prompt = Prompt({
    subsets: ['latin'], // Optional
    weight: '400',      // Optional
});

export const metadata = generateMetadata();

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersObj =  await headers();
    const cookies = headersObj.get('cookie')
    return (
        <html lang="en" suppressHydrationWarning className={prompt.className}>
            <body
                className={cn(
                    "min-h-screen text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
                    
                )}
            >
                 <ContextProvider cookies={cookies}>

                <Toaster richColors theme="dark" position="top-right" />
                {children}
                 </ContextProvider>
            </body>
        </html>
    );
};

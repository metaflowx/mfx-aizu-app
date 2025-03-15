import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import { headers } from "next/headers";
import React from 'react';
import ContextProvider from "../context";
import { ToastContainer } from "react-toastify";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = async({ children }: Props) => {

    const headersObj =  await headers();
    const cookies = headersObj.get('cookie')
   
    return (
        <div className="heroBg">
             <ContextProvider cookies={cookies}>
             <ToastContainer />
             <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
             </ContextProvider>
           
           
           
           
        </div>
    );
};

export default MarketingLayout

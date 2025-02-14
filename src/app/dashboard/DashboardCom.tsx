"use client"
import { Sidebar } from '@/components/sidebar/sidebar'
import React, { useState } from 'react'

export default function DashboardCom({children}:{children:any}) {
    const[collapsed,setCollapsed]=useState(false)
  return (
    <div className="flex h-screen overflow-hidden">
            {/* Sidebar - Fixed Width and Non-Scrolling */}
            <div className={`${  collapsed ? "w-[6.5rem]" : "w-64"}  hidden md:block`}>
              <Sidebar className="h-full fixed top-50 left-0  " setCollapsed={setCollapsed} collapsed={collapsed} />
            </div>

            {/* Main Content - Scrollable */}
            <main className="flex-1 p-8 pt-6 overflow-y-auto h-screen">
              {children}
            </main>
          </div>
  )
}

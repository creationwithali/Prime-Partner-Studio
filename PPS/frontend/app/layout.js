'use client'
import React from 'react'
import '../styles/globals.css'
import TgToastContainer from '../src/components/TgToast'
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <head />
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col" suppressHydrationWarning>
          <main className="flex-1">{children}</main>
          <TgToastContainer />
        </div>
      </body>
    </html>
  )
}

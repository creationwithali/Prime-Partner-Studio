'use client'
import React from 'react'
import '../styles/globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head />
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col" suppressHydrationWarning>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

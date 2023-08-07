import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import { ModalProvider } from '@/provider/modal-provider'
import { ToastProvider } from '@/provider/toast-provider'
import { ThemeProvider } from '@/provider/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'E-Commerce Dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
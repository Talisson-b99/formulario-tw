import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
        />
      </head>
      <body className={`${inter.className} w-full`}>
        <ThemeProvider attribute="class">
          <div className="fixed flex min-w-full lg:grid lg:grid-cols-app">
            <Sidebar />
            <main className="max-h-screen w-screen overflow-y-scroll px-3 pb-12 pt-8 dark:bg-zinc-900 lg:w-[100%] lg:px-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

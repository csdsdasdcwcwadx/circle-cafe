import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Providers } from '@/redux/provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../global.css';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Circle Cafe',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}

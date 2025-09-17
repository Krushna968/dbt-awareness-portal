import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DBT Sahayak - Direct Benefit Transfer Portal',
  description: 'Empowering Your Direct Benefit Transfer (DBT) - Government of India DBT Services',
  keywords: ['DBT', 'Direct Benefit Transfer', 'Aadhaar', 'Government', 'India', 'NPCI', 'Subsidies'],
  authors: [{ name: 'DBT Mission - NIC' }],
  openGraph: {
    title: 'DBT Sahayak - Direct Benefit Transfer Portal',
    description: 'Empowering Your Direct Benefit Transfer (DBT) - Government of India DBT Services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

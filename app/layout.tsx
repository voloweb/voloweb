import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { MenuProvider } from '@/contexts/MenuContext'
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'

const roboto = Roboto({
  variable: '--roboto-font',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const montserrat = Montserrat({
  variable: '--montserrat-font',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Volo',
  description: 'Turbinando sua empresa com as tecnologias de ponta',
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/icone-volo.png`,
        width: 300,
        height: 300
      }
    ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Analytics />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KEJRG442C8"
        />
        <Script src="/gtag.js" />
        <MenuProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MenuProvider>
        <ToastContainer bodyClassName="text-sm font-roboto" />
      </body>
    </html>
  )
}

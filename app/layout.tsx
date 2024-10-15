import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { MenuProvider } from '@/contexts/MenuContext'
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
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
  description: 'Turbinando sua empresa com as tecnologias de ponta'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
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

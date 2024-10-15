'use client'
import Button from '../Button'
import ButtonsSocial from '../ButtonsSocial'
import Newsletter from '../Newsletter'
import Link from 'next/link'
import { navigation, NavigationType } from '../Navbar/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/logo-volo-white.svg'

import './style.css'

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="footer flex justify-center items-center px-5 py-5 md:py-0 bg-footer text-neutra-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-center col-span-1 md:col-span-2">
          {/* <h3 className="font-medium text-neutra-50 font-montserrat leading-10 text-4xl pb-4">
            Quer receber nossas novidades?
          </h3>
          <span className="block text-neutra-500 font-roboto font-normal leading-7 pb-4">
            Enviaremos um e-mail por semana, sem spam.
          </span>
          <Newsletter /> */}
          <Image className="h-10 w-auto" priority src={Logo} alt="Volo logo" />
        </div>

        <div className="col-span-1">
          <ul>
            <li className="text-neutra-50 font-roboto font-normal leading-7 py-1">
              Menu
            </li>
            {navigation.map((item: NavigationType) => (
              <li
                key={item.name}
                className="text-neutra-500 hover:opacity-80 font-roboto font-normal leading-7 py-1"
              >
                <Link href={item.href}> {item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="col-span-1">
          <span className="text-neutra-50 font-roboto font-normal leading-7	 py-1">
            Endereço
          </span>
          <p className="text-neutra-500 font-roboto font-normal leading-7	 py-1">
            Rua Espirito Santo, Setor 05, Ariquemes- RO
          </p>
        </div> */}

        <div className="flex flex-col items-center md:items-center lg:items-start col-span-1 md:col-span-2 lg:col-span-1">
          <Button
            onClick={() => router.push('/#contato')}
            aria-label="Contato"
            className="w-full lg:w-auto"
          >
            Contato
          </Button>
          {/* <ButtonsSocial /> */}
        </div>
      </div>
    </footer>
  )
}

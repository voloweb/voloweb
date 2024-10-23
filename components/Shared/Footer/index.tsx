'use client'
import Button from '../Button'
import ButtonsSocial from '../ButtonsSocial'
import Newsletter from '../Newsletter'
import Link from 'next/link'
import { navigation, NavigationType } from '../Navbar/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/logo-volo-white.svg'

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="footer flex flex-col justify-center items-center bg-footer text-neutra-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-5 md:py-0 w-full">
        <div className="flex flex-col col-span-1">
          {/* <h3 className="font-medium text-neutra-50 font-montserrat leading-10 text-4xl pb-4">
            Quer receber nossas novidades?
          </h3>
          <span className="block text-neutra-500 font-roboto font-normal leading-7 pb-4">
            Enviaremos um e-mail por semana, sem spam.
          </span>
          <Newsletter /> */}
          <div className="py-1 mb-5">
            <Image
              className="w-24 h-auto"
              priority
              src={Logo}
              alt="Volo logo"
            />
          </div>
          <p className="font-montserrat font-normal text-[15px] py-2 lg:max-w-80">
            Traga seu projeto para o próximo nível com um site que realmente
            representa sua marca. Solicite um orçamento e comece a construir sua
            presença online hoje mesmo!
          </p>
        </div>

        <div className="flex flex-col items-center col-span-1">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            <li className="mb-5 col-span-3 text-neutra-50 text-[17px] font-montserrat font-semibold leading-7 py-1">
              Navegação
            </li>
            {navigation.map((item: NavigationType) => (
              <li
                key={item.name}
                className="col-span-3 md:col-span-2 lg:col-span-1 text-[15px] text-neutra-500 font-montserrat font-normal leading-7 py-1"
              >
                <Link href={item.href} className="hover:opacity-80">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-center col-span-1 md:col-span-2 lg:col-span-1">
          <div className="py-1">
            <Button
              onClick={() => router.push('/#contato')}
              aria-label="Contato"
              className="w-full lg:w-auto mb-6"
            >
              Solicitar Orçamento
            </Button>
            <ButtonsSocial />
            <span className="block text-[12px] font-montserrat mt-6">
              Voloti Consultoria De Projetos Ltda
            </span>
            <span className="block text-[12px] font-montserrat mt-1">
              44.737.726/0001-87
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'
import { Fragment, useContext, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo-volo.svg'
import { NavigationType, navigation } from './navigation'
import VLibras from '@djpfs/react-vlibras'
import { MenuContext } from '@/contexts/MenuContext'
import { usePathname, useRouter } from 'next/navigation'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter()
  const pathName = usePathname()
  const [isShowing, setIsShowing] = useState(false)
  const [querySearch, setQuerySearch] = useState('')
  const [scroll, setScroll] = useState(false)
  const { menuActive, setMenuActive } = useContext(MenuContext)

  const keyUp = (e: any) => {
    if (e.key === 'Enter') search()
  }

  const search = () => {
    setIsShowing(false)
    router.push(`/blog?query=${querySearch}`)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  useEffect(() => {
    if (pathName.includes('/blog') && menuActive !== 'Blog') {
      setMenuActive('Blog')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])

  return (
    <>
      <VLibras forceOnload={true} />
      <nav
        className={`bg-neutra-50 fixed w-full z-20 shadow-lg ${
          !scroll && 'md:shadow-none'
        }`}
      >
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-10">
          <div className="relative flex h-16 items-center justify-center md:justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                onClick={() => setIsShowing((isShowing) => !isShowing)}
                className="relative inline-flex items-center justify-center rounded-lg p-2 text-neutra-800 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
              >
                <span className="absolute rounded-lg -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {isShowing ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-center md:items-stretch md:justify-start">
              <Link href="/" className="flex flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  priority
                  src={Logo}
                  alt="Volo logo"
                />
              </Link>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center md:items-stretch md:justify-center">
              <div className="md:ml-6 md:block">
                <div className="flex justify-center space-x-8">
                  {navigation.map((item: NavigationType) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.name === menuActive
                          ? 'border-b-2 border-semantica-1 text-semantica-1'
                          : 'text-neutra-700 hover:text-neutra-900',
                        'py-0.5 font-roboto font-normal leading-5'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Button
                onClick={() => router.push('/#contato')}
                aria-label="Contato"
              >
                Contato
              </Button>
            </div> */}
            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-10 bg-transparent focus:border rounded-md transition duration-300 ease focus:outline-none focus:shadow"
                    placeholder="Pesquisa..."
                    value={querySearch}
                    onChange={(e) => setQuerySearch(e.target.value)}
                    onKeyUp={(e) => keyUp(e)}
                  />

                  <button
                    className="absolute right-1 top-[5px] rounded-md bg-semantica-1 p-1.5 border border-transparent text-center text-sm text-white transition-all hover:opacity-95"
                    type="button"
                    onClick={() => search()}
                  >
                    <MagnifyingGlassIcon
                      className="block h-4 w-4"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden h-[calc(100vh_-_64px)] relative">
            <div className="w-full px-2 pt-2">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-10 bg-transparent focus:border rounded-md transition duration-300 ease focus:outline-none shadow"
                  placeholder="Pesquisa..."
                  value={querySearch}
                  onChange={(e) => setQuerySearch(e.target.value)}
                  onKeyUp={(e) => keyUp(e)}
                />

                <button
                  className="absolute right-1 top-[5px] rounded-md bg-semantica-1 p-1.5 border border-transparent text-center text-sm text-white transition-all hover:opacity-95"
                  type="button"
                  onClick={() => search()}
                >
                  <MagnifyingGlassIcon
                    className="block h-4 w-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item: NavigationType) => (
                <Link
                  onClick={() => setIsShowing(false)}
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.name === menuActive
                      ? 'font-semibold border-semantica-1 text-semantica-1'
                      : 'text-neutra-700 hover:text-neutra-900',
                    'block px-3 py-2 font-roboto font-normal leading-10'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <div className="absolute space-y-1 px-2 pb-3 pt-2 w-full">
              <Button
                onClick={() => {
                  router.push('/#contato')
                  setIsShowing(false)
                }}
                aria-label="Contato"
                className="w-full"
              >
                Contato
              </Button>
            </div> */}
          </div>
        </Transition>
      </nav>
    </>
  )
}

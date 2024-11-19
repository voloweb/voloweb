'use client'
import { createContext, useEffect, useState } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
interface MenuContextData {
  menuActive: string
  setMenuActive: Function
}

export const MenuContext = createContext({
  menuActive: '',
  setMenuActive: () => {}
} as MenuContextData)

export function MenuProvider({ children, ...rest }: any) {
  const [currentMenu, setCurrentMenu] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const setMenuActive = (menu: string) => {
    setCurrentMenu(menu)
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ''}
      language="pt-BR"
    >
      <MenuContext.Provider value={{ menuActive: currentMenu, setMenuActive }}>
        {children}
      </MenuContext.Provider>
    </GoogleReCaptchaProvider>
  )
}

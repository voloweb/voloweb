'use client'
import { createContext, useEffect, useState } from 'react'

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
    <MenuContext.Provider value={{ menuActive: currentMenu, setMenuActive }}>
      {children}
    </MenuContext.Provider>
  )
}

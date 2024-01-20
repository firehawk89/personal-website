'use client'

import { createContext } from 'react'

type HeaderContextType = {
  isMenuOpened: boolean
  toggleMenu: () => void
}

const HeaderContext = createContext<HeaderContextType>({
  isMenuOpened: false,
  toggleMenu: () => {},
})

export default HeaderContext

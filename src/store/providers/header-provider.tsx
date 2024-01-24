'use client'

import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import useMediaQuery from '@/hooks/use-media-query'
import HeaderContext from '@/store/header-context'
import { MOBILE_BREAKPOINT } from '@/utils'

type HeaderProviderProps = {
  children: ReactNode
}

const HeaderProvider: FC<HeaderProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const [allowToggle, setAllowToggle] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    if (allowToggle) {
      document.body.classList.toggle('no-scroll')
      setIsMenuOpened(!isMenuOpened)
    }
  }, [isMenuOpened, allowToggle])

  useEffect(() => {
    if (isMobile) {
      setIsMenuOpened(false)
      setAllowToggle(true)
    } else {
      setAllowToggle(false)
    }
  }, [isMobile])

  return (
    <HeaderContext.Provider value={{ isMenuOpened, toggleMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider

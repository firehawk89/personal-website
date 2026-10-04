'use client'

import {
  FC,
  ReactNode,
  startTransition,
  useCallback,
  useEffect,
  useState,
} from 'react'

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

  const openMenu = useCallback(() => {
    if (allowToggle) {
      document.body.classList.add('no-scroll')
      setIsMenuOpened(true)
    }
  }, [allowToggle])

  const closeMenu = useCallback(() => {
    if (allowToggle) {
      document.body.classList.remove('no-scroll')
      setIsMenuOpened(false)
    }
  }, [allowToggle])

  useEffect(() => {
    if (isMobile) {
      startTransition(() => {
        setIsMenuOpened(false)
        setAllowToggle(true)
      })
    } else {
      startTransition(() => {
        setAllowToggle(false)
      })
    }
  }, [isMobile])

  return (
    <HeaderContext.Provider value={{ closeMenu, isMenuOpened, openMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider

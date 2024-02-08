'use client'

import Menu from '@/components/header/menu/menu'
import MenuItem from '@/components/header/menu/menu-item'
import Socials from '@/components/ui/socials/socials'
import useMediaQuery from '@/hooks/use-media-query'
import HeaderContext from '@/store/header-context'
import { MOBILE_BREAKPOINT, cn } from '@/utils'
import { FC, useContext } from 'react'

type HeaderNavbarProps = {
  className?: string
}

const HeaderNavbar: FC<HeaderNavbarProps> = ({ className }) => {
  const { isMenuOpened } = useContext(HeaderContext)
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-20 -translate-y-full border-b border-accent bg-light py-8 transition-transform duration-500 dark:bg-dark md:static md:translate-y-0 md:border-none md:bg-transparent md:p-0 md:dark:bg-transparent',
        isMenuOpened && 'translate-y-0',
        className
      )}
    >
      <Menu
        className="mx-auto uppercase"
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        <MenuItem href="/#about-me">About Me</MenuItem>
        <MenuItem href="/#my-projects">My Projects</MenuItem>
        <MenuItem href="/#contact-me">Contact Me</MenuItem>
      </Menu>
      <Socials className="mt-6 justify-center md:hidden" />
    </nav>
  )
}

export default HeaderNavbar

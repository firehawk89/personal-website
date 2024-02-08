import HeaderNavbar from '@/components/header/header-navbar'
import ThemeToggler from '@/components/ui/theme-toggler'
import { cn } from '@/utils'
import { FC } from 'react'

import MenuIcon from './menu/menu-icon/menu-icon'

type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-10 w-full bg-light bg-opacity-10 px-8 py-5 shadow-blur backdrop-blur-[8px] lg:px-10',
        className
      )}
    >
      <HeaderNavbar />
      <div className="relative z-30 flex items-center justify-between md:static">
        <ThemeToggler className="-mx-5 -my-2 md:absolute md:right-5 md:top-1/2 md:m-0 md:-translate-y-1/2" />
        <MenuIcon className="md:hidden" />
      </div>
    </header>
  )
}

export default Header

import HeaderNavbar from '@/components/header/header-navbar'
import Content from '@/components/ui/content'
import Logo from '@/components/ui/logo'
import ThemeToggler from '@/components/ui/theme-toggler'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuIcon from './menu/menu-icon/menu-icon'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-10 w-full bg-light bg-opacity-10 py-5 shadow-blur backdrop-blur-[8px]',
        className
      )}
      {...props}
    >
      <Content className="relative" size="wide">
        <Logo className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 md:left-8 md:translate-x-0 lg:left-10" />
        <HeaderNavbar className="z-20" />
        <div className="relative z-30 flex items-center justify-between md:static">
          <ThemeToggler className="-mx-5 -my-2 md:absolute md:right-5 md:top-1/2 md:m-0 md:-translate-y-1/2" />
          <MenuIcon className="md:hidden" />
        </div>
      </Content>
    </header>
  )
}

export default Header

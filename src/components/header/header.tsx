import Menu from '@/components/header/menu/menu'
import ThemeToggler from '@/components/ui/theme-toggler'
import { classnames } from '@/utils'
import { FC } from 'react'

import MenuIcon from './menu/menu-icon/menu-icon'
import MenuItem from './menu/menu-item'

type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={classnames(
        'fixed left-0 top-0 z-10 w-full bg-light bg-opacity-10 px-8 py-4 shadow-blur backdrop-blur-[8px] lg:px-10',
        className
      )}
    >
      <Menu className="mx-auto">
        <MenuItem href="/#about-me">About Me</MenuItem>
        <MenuItem href="/#my-projects">My Work</MenuItem>
        <MenuItem href="/#contact-me">Contact Me</MenuItem>
      </Menu>
      <div className="flex items-center justify-between">
        <ThemeToggler className="-m-2 md:absolute md:right-10 md:top-1/2 md:m-0 md:-translate-y-1/2" />
        <MenuIcon className="md:hidden" />
      </div>
    </header>
  )
}

export default Header

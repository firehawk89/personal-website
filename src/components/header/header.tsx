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
        'px-8 lg:px-10 py-4 fixed z-10 top-0 left-0 w-full bg-light bg-opacity-10 shadow-blur backdrop-blur-[8px]',
        className
      )}
    >
      <Menu className="mx-auto">
        <MenuItem href="/#about-me">About Me</MenuItem>
        <MenuItem href="/#my-projects">My Work</MenuItem>
        <MenuItem href="/#contact-me">Contact Me</MenuItem>
      </Menu>
      <div className="flex justify-between items-center">
        <ThemeToggler className="-m-2 md:m-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-10" />
        <MenuIcon className="md:hidden" />
      </div>
    </header>
  )
}

export default Header

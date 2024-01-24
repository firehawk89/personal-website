import { FC } from 'react'
import { classnames } from '@/utils'
import Menu from '@/components/Header/Menu/Menu'
import MenuItem from './Menu/menu-item'
import MenuIcon from './Menu/MenuIcon/menu-icon'

type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={classnames(
        'px-8 lg:px-10 py-5 fixed z-10 top-0 left-0 w-full bg-light bg-opacity-10 shadow-blur backdrop-blur-[8px]',
        className
      )}
    >
      <Menu className="mx-auto">
        <MenuItem href="/#about-me">About Me</MenuItem>
        <MenuItem href="/#my-projects">My Work</MenuItem>
        <MenuItem href="/#contact-me">Contact Me</MenuItem>
      </Menu>
      <MenuIcon className="md:hidden ml-auto" />
    </header>
  )
}

export default Header

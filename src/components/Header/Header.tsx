import { FC } from 'react'
import { classnames } from '@/utils'
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem'
import MenuIcon from './Menu/MenuIcon/MenuIcon'

type HeaderProps = {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={classnames(
        'px-8 lg:px-10 py-5 fixed top-0 left-0 w-full bg-light bg-opacity-10 shadow-blur backdrop-blur-[8px]',
        className
      )}
    >
      <Menu className="mx-auto">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/#about-me">About Me</MenuItem>
        <MenuItem href="/#my-projects">My Projects</MenuItem>
        <MenuItem href="/#contact-me">Contact Me</MenuItem>
      </Menu>
      <MenuIcon className="md:hidden ml-auto" />
    </header>
  )
}

export default Header

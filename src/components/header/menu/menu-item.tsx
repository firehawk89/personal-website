'use client'

import HeaderContext from '@/store/header-context'
import Link from 'next/link'
import { FC, LiHTMLAttributes, useContext } from 'react'

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  href: string
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  const { closeMenu, isMenuOpened, openMenu } = useContext(HeaderContext)

  return (
    <li
      className={className}
      onClick={isMenuOpened ? closeMenu : openMenu}
      {...props}
    >
      <Link
        className="text-lg font-medium transition-colors md:hover:text-accent"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem

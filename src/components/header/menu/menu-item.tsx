'use client'

import HeaderContext from '@/store/header-context'
import Link from 'next/link'
import { FC, ReactNode, useContext } from 'react'

type MenuItemProps = {
  children: ReactNode
  className?: string
  href: string
}

const MenuItem: FC<MenuItemProps> = ({ children, className, href }) => {
  const { toggleMenu } = useContext(HeaderContext)

  return (
    <li className={className} onClick={toggleMenu}>
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

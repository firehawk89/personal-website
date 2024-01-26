import Link from 'next/link'
import { FC, ReactNode } from 'react'

type MenuItemProps = {
  children: ReactNode
  className?: string
  href: string
}

const MenuItem: FC<MenuItemProps> = ({ children, className, href }) => {
  return (
    <li className={className}>
      <Link
        className="text-lg font-medium uppercase transition-colors md:hover:text-accent"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem

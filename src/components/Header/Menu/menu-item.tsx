import { FC, ReactNode } from 'react'
import Link from 'next/link'

type MenuItemProps = {
  children: ReactNode
  className?: string
  href: string
}

const MenuItem: FC<MenuItemProps> = ({ children, className, href }) => {
  return (
    <li className={className}>
      <Link
        className="text-lg font-medium uppercase md:hover:text-accent transition-colors"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem

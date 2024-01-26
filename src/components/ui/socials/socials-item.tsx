import Link from 'next/link'
import { FC, ReactNode } from 'react'

type SocialsItemProps = {
  children: ReactNode
  className?: string
  href: string
}

const SocialsItem: FC<SocialsItemProps> = ({ children, className, href }) => {
  return (
    <li className={className}>
      <Link
        className="hover:text-accent transition-colors"
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  )
}

export default SocialsItem

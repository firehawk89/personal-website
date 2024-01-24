import { FC, ReactNode } from 'react'
import Link from 'next/link'

type SocialsItemProps = {
  children: ReactNode
  className?: string
  href: string
}

const SocialsItem: FC<SocialsItemProps> = ({ children, className, href }) => {
  return (
    <li className={className}>
      <Link
        className="text-3xl md:text-4xl hover:text-accent transition-colors"
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  )
}

export default SocialsItem
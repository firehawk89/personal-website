'use client'

import HeaderContext from '@/store/header-context'
import { LINK } from '@/types/enums/Link'
import { cn } from '@/utils'
import Link from 'next/link'
import { AnchorHTMLAttributes, FC, useContext } from 'react'

interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Logo: FC<LogoProps> = ({ className, ...props }) => {
  const { closeMenu } = useContext(HeaderContext)

  return (
    <Link
      className={cn('text-3xl font-bold text-accent', className)}
      href={LINK.index}
      onClick={closeMenu}
      {...props}
    >
      AB
    </Link>
  )
}

export default Logo

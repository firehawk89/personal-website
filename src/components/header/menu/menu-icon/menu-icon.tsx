'use client'

import { FC, HTMLAttributes, useContext } from 'react'

import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'

import MenuIconBar from './menu-icon-bar'

const MenuIcon: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { closeMenu, isMenuOpened, openMenu } = useContext(HeaderContext)

  return (
    <div
      className={cn('relative h-5 w-7 cursor-pointer md:static', className)}
      onClick={isMenuOpened ? closeMenu : openMenu}
      {...props}
    >
      <MenuIconBar
        className={cn(
          isMenuOpened ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        )}
      />
      <MenuIconBar
        className={cn('top-1/2 -translate-y-1/2', isMenuOpened && 'opacity-0')}
      />
      <MenuIconBar
        className={cn(
          isMenuOpened
            ? 'top-1/2 -translate-y-1/2 -rotate-45'
            : 'top-full -translate-y-full'
        )}
      />
    </div>
  )
}

export default MenuIcon

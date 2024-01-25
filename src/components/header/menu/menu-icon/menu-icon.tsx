'use client'

import HeaderContext from '@/store/header-context'
import { classnames } from '@/utils'
import { FC, useContext } from 'react'

import MenuIconBar from './menu-icon-bar'

type MenuIconProps = {
  className?: string
}

const MenuIcon: FC<MenuIconProps> = ({ className }) => {
  const { isMenuOpened, toggleMenu } = useContext(HeaderContext)

  return (
    <div
      className={classnames('cursor-pointer relative z-30 w-7 h-5', className)}
      onClick={toggleMenu}
    >
      <MenuIconBar
        className={classnames(
          isMenuOpened ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        )}
      />
      <MenuIconBar
        className={classnames(
          'top-1/2 -translate-y-1/2',
          isMenuOpened && 'opacity-0'
        )}
      />
      <MenuIconBar
        className={classnames(
          isMenuOpened
            ? 'top-1/2 -translate-y-1/2 -rotate-45'
            : 'top-full -translate-y-full'
        )}
      />
    </div>
  )
}

export default MenuIcon

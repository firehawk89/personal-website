'use client'

import { FC, useContext } from 'react'
import HeaderContext from '@/store/header/header-context'
import { classnames } from '@/utils'
import MenuIconBar from './MenuIconBar'

type MenuIconProps = {
  className?: string
}

const MenuIcon: FC<MenuIconProps> = ({ className }) => {
  const { isMenuOpened, toggleMenu } = useContext(HeaderContext)

  return (
    <div
      className={classnames(
        'cursor-pointer relative z-30 w-7 flex flex-col gap-2',
        className
      )}
      onClick={toggleMenu}
    >
      <MenuIconBar
        className={isMenuOpened ? 'animate-top-down' : 'animate-top-up'}
      />
      <MenuIconBar
        className={isMenuOpened ? 'animate-scaled-none' : 'animate-scaled'}
      />
      <MenuIconBar
        className={isMenuOpened ? 'animate-bottom-up' : 'animate-bottom-down'}
      />
    </div>
  )
}

export default MenuIcon

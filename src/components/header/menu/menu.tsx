'use client'

import HeaderContext from '@/store/header-context'
import { classnames } from '@/utils'
import { FC, ReactNode, useContext } from 'react'

type MenuProps = {
  children: ReactNode
  className?: string
}

const Menu: FC<MenuProps> = ({ children, className }) => {
  const { isMenuOpened } = useContext(HeaderContext)

  return (
    <ul
      className={classnames(
        'fixed left-0 top-0 z-20 flex w-full flex-col items-center justify-center gap-6 bg-light py-8 transition-transform duration-500 md:static md:w-fit md:translate-y-0 md:flex-row md:items-stretch md:justify-stretch md:gap-10 md:bg-transparent md:p-0',
        isMenuOpened ? 'translate-y-0' : '-translate-y-full',
        className
      )}
    >
      {children}
    </ul>
  )
}

export default Menu

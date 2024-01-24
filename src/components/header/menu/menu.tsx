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
        'py-8 md:p-0 fixed md:static z-20 top-0 left-0 md:translate-y-0 w-full md:w-fit flex flex-col md:flex-row justify-center md:justify-stretch items-center md:items-stretch gap-6 md:gap-10 bg-light md:bg-transparent transition-transform duration-500',
        isMenuOpened ? 'translate-y-0' : '-translate-y-full',
        className
      )}
    >
      {children}
    </ul>
  )
}

export default Menu

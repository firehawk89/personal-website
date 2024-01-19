import { FC, ReactNode } from 'react'
import { classnames } from '@/utils'

type MenuProps = {
  children: ReactNode
  className?: string
}

const Menu: FC<MenuProps> = ({ children, className }) => {
  return (
    <ul className={classnames('flex w-fit gap-10', className)}>{children}</ul>
  )
}

export default Menu

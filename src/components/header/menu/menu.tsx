import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type MenuProps = {
  children: ReactNode
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

const Menu: FC<MenuProps> = ({ children, className, orientation }) => {
  return (
    <ul
      className={classnames(
        'flex w-fit items-center justify-stretch bg-transparent',
        orientation === 'vertical' ? 'flex-col gap-6' : 'flex-row gap-10',
        className
      )}
    >
      {children}
    </ul>
  )
}

export default Menu

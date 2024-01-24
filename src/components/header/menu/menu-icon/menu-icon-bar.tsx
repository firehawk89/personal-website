import { classnames } from '@/utils'
import { FC } from 'react'

type MenuIconBarProps = { className?: string }

const MenuIconBar: FC<MenuIconBarProps> = ({ className }) => {
  return (
    <span
      className={classnames(
        'relative block w-full h-0.5 rounded-md bg-dark transition-all',
        className
      )}
    />
  )
}

export default MenuIconBar

import { classnames } from '@/utils'
import { FC } from 'react'

type MenuIconBarProps = { className?: string }

const MenuIconBar: FC<MenuIconBarProps> = ({ className }) => {
  return (
    <span
      className={classnames(
        'absolute left-0 right-0 block w-full h-0.5 rounded-sm bg-dark transition-all',
        className
      )}
    />
  )
}

export default MenuIconBar

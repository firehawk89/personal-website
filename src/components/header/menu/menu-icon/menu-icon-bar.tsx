import { cn } from '@/utils'
import { FC } from 'react'

type MenuIconBarProps = { className?: string }

const MenuIconBar: FC<MenuIconBarProps> = ({ className }) => {
  return (
    <span
      className={cn(
        'absolute left-0 right-0 block h-0.5 w-full rounded-sm bg-dark transition-all dark:bg-light',
        className
      )}
    />
  )
}

export default MenuIconBar

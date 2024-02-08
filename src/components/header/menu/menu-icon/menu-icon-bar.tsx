import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface MenuIconBarProps extends HTMLAttributes<HTMLSpanElement> {}

const MenuIconBar: FC<MenuIconBarProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'absolute left-0 right-0 block h-0.5 w-full rounded-sm bg-dark transition-all dark:bg-light',
        className
      )}
      {...props}
    />
  )
}

export default MenuIconBar

import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  orientation?: 'horizontal' | 'vertical'
}

const Menu: FC<MenuProps> = ({
  children,
  className,
  orientation,
  ...props
}) => {
  return (
    <ul
      className={cn(
        'flex w-fit items-center justify-stretch bg-transparent',
        orientation === 'vertical' ? 'flex-col gap-6' : 'flex-row gap-10',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export default Menu

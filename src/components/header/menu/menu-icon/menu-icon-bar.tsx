import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

const MenuIconBar: FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'absolute right-0 left-0 block h-0.5 w-full rounded-xs bg-dark transition-all dark:bg-light',
        className
      )}
      {...props}
    />
  )
}

export default MenuIconBar

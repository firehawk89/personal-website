import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

const MenuIconBar: FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
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

import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

export interface IconsListProps extends HTMLAttributes<HTMLUListElement> {
  orientation?: 'horizontal' | 'vertical'
}

const IconsList: FC<IconsListProps> = ({
  children,
  className,
  orientation = 'horizontal',
  ...props
}) => {
  return (
    <ul
      className={cn(
        'flex gap-5',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export default IconsList

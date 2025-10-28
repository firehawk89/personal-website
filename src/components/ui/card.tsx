import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

const Card: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('overflow-hidden rounded-lg shadow-md', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

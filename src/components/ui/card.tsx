import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ children, className, ...props }) => {
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

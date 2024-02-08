import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

const Content: FC<ContentProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('mx-auto h-full w-full max-w-7xl px-5', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Content

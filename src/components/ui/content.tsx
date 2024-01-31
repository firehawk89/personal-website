import { cn } from '@/utils'
import { FC, ReactNode } from 'react'

type ContentProps = { children: ReactNode; className?: string }

const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto h-full w-full max-w-7xl px-5', className)}>
      {children}
    </div>
  )
}

export default Content

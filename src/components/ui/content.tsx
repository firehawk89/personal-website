import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type ContentProps = { children: ReactNode; className?: string }

const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <div
      className={classnames('mx-auto px-5 w-full h-full max-w-7xl', className)}
    >
      {children}
    </div>
  )
}

export default Content

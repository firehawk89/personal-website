import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

const contentVariants = cva('mx-auto h-full w-full', {
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: {
      default: 'max-w-7xl px-5',
      tight: 'max-w-4xl px-5',
      wide: 'px-8 lg:px-10',
    },
  },
})

interface ContentProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentVariants> {}

const Content: FC<ContentProps> = ({ children, className, size, ...props }) => {
  return (
    <div className={cn(contentVariants({ size }), className)} {...props}>
      {children}
    </div>
  )
}

export default Content

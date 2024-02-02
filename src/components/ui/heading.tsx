import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

export const headingVariants = cva('w-fit', {
  defaultVariants: {
    size: 'h1',
  },
  variants: {
    size: {
      h1: 'text-4xl font-bold md:text-5xl',
      h2: 'text-3xl font-semibold md:text-4xl',
    },
    variant: {
      underline:
        'pb-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:w-2/6',
    },
  },
})

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, variant }) => {
  const HeadingTag = size ? size : 'h1'

  return (
    <HeadingTag className={cn(headingVariants({ size, variant }), className)}>
      {children}
    </HeadingTag>
  )
}

export default Heading

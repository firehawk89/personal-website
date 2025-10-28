import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

export const headingVariants = cva('w-fit', {
  defaultVariants: {
    position: 'default',
    size: 'h1',
  },
  variants: {
    position: {
      center: 'mx-auto after:left-1/2 after:-translate-x-1/2',
      default: 'after:left-0',
    },
    size: {
      h1: 'text-4xl font-bold md:text-5xl',
      h2: 'text-3xl font-semibold md:text-4xl',
      h3: 'text-2xl font-semibold md:text-3xl',
      h4: 'text-xl font-semibold md:text-2xl',
      h5: 'text-lg font-semibold md:text-xl',
      h6: 'font-semibold md:text-4xl',
    },
    variant: {
      underline:
        'pb-1.5 relative after:absolute after:bottom-0 after:h-0.5 after:bg-accent after:w-2/6',
    },
  },
})

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading: FC<HeadingProps> = ({
  children,
  className,
  level = 1,
  position,
  size,
  variant,
  ...props
}) => {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`

  return (
    <HeadingTag
      className={cn(headingVariants({ position, size, variant }), className)}
      {...props}
    >
      {children}
    </HeadingTag>
  )
}

export default Heading

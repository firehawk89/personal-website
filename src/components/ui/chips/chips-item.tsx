import { VariantProps, cva } from 'class-variance-authority'
import { FC, LiHTMLAttributes } from 'react'

import { cn } from '@/utils'

const chipsItemVariants = cva(
  'bg-accent bg-opacity-75 font-semibold text-light',
  {
    defaultVariants: {
      size: 'default',
    },
    variants: {
      size: {
        default: 'rounded-2xl px-4 py-1.5',
        sm: 'rounded-xl px-3 py-1 text-sm',
      },
    },
  }
)

interface ChipsItemProps
  extends LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof chipsItemVariants> {
  label: string
}

const ChipsItem: FC<ChipsItemProps> = ({ className, label, size }) => {
  return <li className={cn(chipsItemVariants({ size }), className)}>{label}</li>
}

export default ChipsItem

import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ChipsProps extends HTMLAttributes<HTMLUListElement> {}

const Chips: FC<ChipsProps> = ({ children, className }) => {
  return <ul className={cn('flex flex-wrap gap-2', className)}>{children}</ul>
}

export default Chips

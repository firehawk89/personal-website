import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

const Chips: FC<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
}) => {
  return <ul className={cn('flex flex-wrap gap-2', className)}>{children}</ul>
}

export default Chips

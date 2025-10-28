import { FC, LabelHTMLAttributes } from 'react'

import { cn } from '@/utils'

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label className={cn('font-medium md:text-lg', className)} {...props}>
      {children}
    </label>
  )
}

export default Label

import { cn } from '@/utils'
import { FC, LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={cn('font-medium md:text-lg', className)} {...props}>
      {children}
    </label>
  )
}

export default Label

import { FC, HTMLAttributes } from 'react'

import { cn } from '@/utils'

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  error?: string
}

const FormItem: FC<FormItemProps> = ({
  children,
  className,
  error,
  ...props
}) => {
  return (
    <div className={cn('relative flex flex-col gap-2', className)} {...props}>
      {children}
      {error && (
        <span className="absolute -bottom-1 left-0 translate-y-full text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

export default FormItem

import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'

export const buttonVariants = cva(
  'font-medium transition-all active:scale-95 md:text-lg',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'py-2 px-5 rounded-md',
        sm: 'p-2',
      },
      variant: {
        default:
          'border-2 border-accent bg-accent text-light md:hover:bg-opacity-80',
        icon: 'bg-transparent md:hover:text-accent',
        outline:
          'border-2 border-accent bg-transparent text-accent md:hover:bg-accent md:hover:text-light',
      },
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  children,
  className,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

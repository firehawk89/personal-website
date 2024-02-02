import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

const buttonVariants = cva(
  'font-medium transition-all active:scale-95 md:text-lg',
  {
    defaultVariants: {
      size: 'md',
      variant: 'solid',
    },
    variants: {
      size: {
        md: 'py-2 px-5 rounded-md',
        sm: 'p-2',
      },
      variant: {
        icon: 'bg-transparent md:hover:text-accent',
        outline:
          'border-2 border-accent bg-transparent text-accent md:hover:bg-accent md:hover:text-light',
        solid:
          'border-2 border-accent bg-accent text-light md:hover:bg-opacity-80',
      },
    },
  }
)

type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  href?: string
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  variant?: keyof typeof buttonVariants
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  href,
  onClick,
  type = 'button',
  variant = 'solid',
}) => {
  return (
    <>
      {href ? (
        <Link
          className={cn(
            // buttonVariants[variant],
            className
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          className={cn(
            // buttonVariants[variant],
            className
          )}
          disabled={disabled}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button

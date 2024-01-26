import { classnames } from '@/utils'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

const buttonVariants = {
  icon: 'bg-transparent p-2 md:hover:text-accent',
  outline:
    'rounded-md border-2 border-accent bg-transparent px-5 py-2 text-accent md:hover:bg-accent md:hover:text-light',
  solid:
    'rounded-md border-2 border-accent bg-accent px-5 py-2 text-light md:hover:bg-opacity-80',
}

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
          className={classnames(
            'font-medium transition-all active:scale-95 md:text-lg',
            buttonVariants[variant],
            className
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          className={classnames(
            'font-medium transition-all active:scale-95 md:text-lg',
            buttonVariants[variant],
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

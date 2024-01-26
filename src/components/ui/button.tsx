import { classnames } from '@/utils'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

const buttonVariants = {
  icon: 'p-2 bg-transparent md:hover:text-accent',
  outline:
    'px-5 py-2 rounded-md border-2 border-accent text-accent bg-transparent md:hover:text-light md:hover:bg-accent',
  solid:
    'px-5 py-2 rounded-md border-2 border-accent text-light bg-accent md:hover:bg-opacity-80',
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
            'md:text-lg font-medium transition-all active:scale-95',
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
            'md:text-lg font-medium transition-all active:scale-95',
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

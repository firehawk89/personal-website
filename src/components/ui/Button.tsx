import { FC, ReactNode } from 'react'
import { classnames } from '@/utils'
import Link from 'next/link'

type ButtonVariant = 'solid' | 'outline'

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
}

const buttonStyles: Record<ButtonVariant, string> = {
  solid: 'text-light bg-accent md:hover:bg-opacity-80',
  outline: 'text-accent bg-transparent md:hover:text-light md:hover:bg-accent',
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  disabled,
  variant = 'solid',
  href,
  onClick,
}) => {
  return (
    <>
      {href ? (
        <Link
          className={classnames(
            'px-5 py-2 rounded-md border-2 border-accent text-lg font-medium transition-all active:scale-95',
            buttonStyles[variant],
            className
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          className={classnames(
            'px-5 py-2 rounded-md border-2 border-accent md:text-lg font-medium transition-all active:scale-95',
            buttonStyles[variant],
            className
          )}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button

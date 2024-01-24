import { classnames } from '@/utils'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

type ButtonVariant = 'outline' | 'solid'

type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  href?: string
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  variant?: ButtonVariant
}

const buttonStyles: Record<ButtonVariant, string> = {
  outline: 'text-accent bg-transparent md:hover:text-light md:hover:bg-accent',
  solid: 'text-light bg-accent md:hover:bg-opacity-80',
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

import { ContactFormInputs, cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, InputHTMLAttributes } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

export const inputVariants = cva(
  'w-full transition-colors outline-none md:text-xl',
  {
    defaultVariants: {
      customSize: 'default',
      variant: 'default',
    },
    variants: {
      customSize: {
        default: 'rounded-2xl px-4 py-3.5',
        placeholder: 'rounded-2xl px-4 pb-2 pt-5',
      },
      variant: {
        default:
          'border border-neutral-400 bg-light dark:border-neutral-600 dark:bg-dark',
        placeholder:
          'border border-neutral-400 bg-light dark:border-neutral-600 dark:bg-dark peer relative placeholder:opacity-0',
      },
    },
  }
)

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  name: Path<ContactFormInputs>
  register: UseFormRegister<ContactFormInputs>
}

const Input: FC<InputProps> = ({
  className,
  customSize,
  name,
  placeholder,
  register,
  required,
  variant,
  ...props
}) => {
  return (
    <>
      {placeholder ? (
        <div className="relative">
          <input
            className={cn(
              inputVariants({
                customSize: 'placeholder',
                variant: 'placeholder',
              }),
              className
            )}
            placeholder={placeholder}
            {...register(name)}
            {...props}
          />
          <span className="pointer-events-none absolute left-4 top-1/2 z-0 -translate-y-1/2 transition-all peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:leading-none peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:leading-none">
            {placeholder}
          </span>
        </div>
      ) : (
        <input
          className={cn(inputVariants({ customSize, variant }), className)}
          {...register(name)}
          {...props}
        />
      )}
    </>
  )
}

export default Input

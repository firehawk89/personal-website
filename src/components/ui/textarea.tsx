import { inputVariants } from '@/components/ui/input'
import { ContactFormInputs, cn } from '@/utils'
import { VariantProps } from 'class-variance-authority'
import { FC, TextareaHTMLAttributes } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  name: Path<ContactFormInputs>
  register: UseFormRegister<ContactFormInputs>
}

const Textarea: FC<TextareaProps> = ({
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
          <textarea
            className={cn(
              'h-full',
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
          <span className="pointer-events-none absolute left-4 top-4 z-0 transition-all peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:leading-none peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:leading-none">
            {placeholder}
          </span>
        </div>
      ) : (
        <textarea
          className={cn(inputVariants({ customSize, variant }), className)}
          {...register(name)}
          {...props}
        />
      )}
    </>
  )
}

export default Textarea

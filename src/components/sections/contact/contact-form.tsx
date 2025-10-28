'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FC, FormHTMLAttributes, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { sendEmail } from '@/app/actions'
import Button from '@/components/ui/button'
import FormItem from '@/components/ui/form-item'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'
import { ContactFormInputs, ContactFormSchema, cn } from '@/utils'

const ContactForm: FC<FormHTMLAttributes<HTMLFormElement>> = ({
  className,
  ...props
}) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true)

    const loadingToast = toast.loading('Sending a message...')
    const result = await sendEmail(data)

    if (result?.success) {
      setIsSubmitting(false)

      toast.dismiss(loadingToast)
      toast.success('Your message has been sent!', {
        closeButton: true,
      })

      reset()
      return
    }

    setIsSubmitting(false)
    toast.dismiss(loadingToast)
    toast.error('Oops! Something went wrong!', {
      closeButton: true,
    })
  }

  return (
    <form
      className={cn(
        'grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:gap-x-10',
        className
      )}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FormItem error={errors.name?.message}>
        <Label htmlFor="name">Enter your name</Label>
        <Input
          disabled={isSubmitting}
          id="name"
          name="name"
          placeholder="Name"
          register={register}
          required
          type="text"
        />
      </FormItem>
      <FormItem error={errors.email?.message}>
        <Label htmlFor="email">Enter your email</Label>
        <Input
          disabled={isSubmitting}
          id="email"
          name="email"
          placeholder="Email"
          register={register}
          required
          type="email"
        />
      </FormItem>
      <FormItem className="sm:col-span-2" error={errors.message?.message}>
        <Label htmlFor="message">Enter your message</Label>
        <Textarea
          disabled={isSubmitting}
          id="message"
          name="message"
          placeholder="Message"
          register={register}
          required
          rows={4}
        />
      </FormItem>
      <Button className="w-full sm:w-fit" disabled={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default ContactForm

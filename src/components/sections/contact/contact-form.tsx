'use client'

import Button from '@/components/ui/button'
import FormItem from '@/components/ui/form-item'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'
import { ContactFormInputs, ContactFormSchema, cn } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, FormHTMLAttributes } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const ContactForm: FC<ContactFormProps> = ({ className, ...props }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <form
      className={cn('grid grid-cols-2 gap-x-10 gap-y-8', className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FormItem error={errors.name?.message}>
        <Label htmlFor="name">Enter your name</Label>
        <Input
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
          id="email"
          name="email"
          placeholder="Email"
          register={register}
          required
          type="email"
        />
      </FormItem>
      <FormItem className="col-span-2" error={errors.message?.message}>
        <Label htmlFor="message">Enter your message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Message"
          register={register}
          required
          rows={4}
        />
      </FormItem>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default ContactForm

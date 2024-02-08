import { z } from 'zod'

export const ContactFormSchema = z.object({
  email: z.string().email('Email is invalid'),
  message: z.string().min(5, 'Message is too short'),
  name: z.string().min(2, 'Name is required'),
})

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

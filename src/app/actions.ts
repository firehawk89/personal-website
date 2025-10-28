'use server'

import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs'

import { ContactFormInputs, ContactFormSchema } from '@/utils'

export const sendEmail = async (data: ContactFormInputs) => {
  const dataParseResult = ContactFormSchema.safeParse(data)

  if (dataParseResult.success) {
    const parsedData = dataParseResult.data

    try {
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        parsedData,
        {
          privateKey: process.env.EMAILJS_PRIVATE_KEY!,
          publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        }
      )

      return { message: response.text, success: true }
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        return { message: error.text, success: false }
      }
    }
  }

  if (!dataParseResult.success) {
    return {
      message: JSON.stringify(dataParseResult.error.format()),
      success: false,
    }
  }
}

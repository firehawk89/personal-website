import ContactForm from '@/components/sections/contact/contact-form'
import Content from '@/components/ui/content'
import Heading from '@/components/ui/heading'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

const Contact: FC<ContactProps> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-light dark:bg-black', className)} {...props}>
      <Content className="max-w-5xl">
        <Heading size="h2" variant="underline">
          Get In Touch
        </Heading>
        <p className="mt-6 md:text-xl">
          Drop me a message using the form below or reach out via my email{' '}
          <a
            className="font-semibold transition-colors hover:text-accent"
            href="mailto:bochkovskyi.anton@gmail.com"
          >
            bochkovskyi.anton@gmail.com
          </a>
          .
        </p>
        <ContactForm className="mt-6" />
      </Content>
    </section>
  )
}

export default Contact

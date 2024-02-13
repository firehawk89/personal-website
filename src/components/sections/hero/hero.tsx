import { buttonVariants } from '@/components/ui/button'
import Content from '@/components/ui/content'
import Heading from '@/components/ui/heading'
import Socials from '@/components/ui/socials'
import { LINK } from '@/types/enums/Link'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

const Hero: FC<HeroProps> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative h-[100dvh] bg-ghost pt-header dark:bg-dark',
        className
      )}
      {...props}
    >
      <Image
        alt="Background"
        className="-z-5 object-cover object-center"
        fill
        sizes="100vw"
        src="/hero-bg.svg"
      />
      <Content
        className="relative flex flex-col items-center justify-center text-center"
        size="tight"
      >
        <article>
          <Heading position="center">
            Hi, I&apos;m <span className="text-accent">Anton Bochkovskyi</span>
          </Heading>
          <p className="mt-4 text-lg font-medium md:text-xl">
            Motivated Front-End Developer with a passion for creating engaging,
            elegant and responsive user interfaces.
          </p>
        </article>
        <Link
          className={cn('mt-5', buttonVariants({ variant: 'outline' }))}
          href={LINK.projects}
        >
          My Projects
        </Link>
      </Content>
      <Socials
        className="absolute bottom-8 left-8 hidden md:flex"
        orientation="vertical"
      />
    </section>
  )
}

export default Hero

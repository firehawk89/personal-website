import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import HeroContent from '@/components/sections/hero/content'
import Content from '@/components/ui/content'
import Socials from '@/components/ui/socials'
import { cn } from '@/utils'

const Hero: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative h-dvh bg-ghost pt-header dark:bg-dark',
        className
      )}
      {...props}
    >
      <Image
        alt="Background"
        className="z-0 object-cover object-center"
        fill
        sizes="100vw"
        src="/hero-bg.svg"
      />

      <Content
        className="relative flex flex-col items-center justify-center text-center"
        size="tight"
      >
        <HeroContent />
      </Content>

      <Socials
        className="absolute bottom-8 left-8 hidden md:flex"
        orientation="vertical"
      />
    </section>
  )
}

export default Hero

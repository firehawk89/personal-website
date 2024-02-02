import Button from '@/components/ui/button'
import Content from '@/components/ui/content'
import Socials from '@/components/ui/socials/socials'
import { cn } from '@/utils'
import { FC } from 'react'

import styles from './hero.module.css'

const Hero: FC = () => {
  return (
    <section
      className={cn('relative bg-ghost dark:bg-dark', styles['hero-container'])}
    >
      <Content className="flex flex-col items-center justify-center text-center">
        <article className="max-w-4xl">
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, I&apos;m <span className="text-accent">Anton Bochkovskyi</span>
          </h1>
          <p className="mt-4 font-medium md:text-xl">
            Motivated Front-End Developer with a passion for creating engaging,
            elegant and responsive user interfaces.
          </p>
        </article>
        <Button className="mt-5" variant="outline">
          My Work
        </Button>
      </Content>
      <Socials
        className="absolute bottom-8 left-8 hidden md:flex"
        orientation="vertical"
      />
    </section>
  )
}

export default Hero

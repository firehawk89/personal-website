import Button from '@/components/ui/button'
import Content from '@/components/ui/content'
import Socials from '@/components/ui/socials/socials'
import { classnames } from '@/utils'
import { FC } from 'react'

import styles from './hero.module.css'

const Hero: FC = () => {
  return (
    <section
      className={classnames(
        'relative bg-ghost dark:bg-dark',
        styles['hero-container']
      )}
    >
      <Content className="flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, I&apos;m <span className="text-accent">Anton Bochkovskyi</span>
          </h1>
          <p className="mt-4 font-medium md:text-xl">
            Motivated Junior Front-End Developer with a passion for creating
            engaging, elegant and responsive user interfaces.
          </p>
        </div>
        <Button className="mt-5" variant="outline">
          My Work
        </Button>
      </Content>
      <Socials className="absolute bottom-2.5 left-1/2 -translate-x-1/2" />
    </section>
  )
}

export default Hero

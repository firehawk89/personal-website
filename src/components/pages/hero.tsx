import { FC } from 'react'
import { classnames } from '@/utils'
import Content from '@/components/ui/content'
import styles from './hero.module.css'
import Button from '@/components/ui/button'
import Socials from '@/components/ui/socials/socials'

const Hero: FC = () => {
  return (
    <section
      className={classnames('relative bg-ghost', styles['hero-container'])}
    >
      <Content className="flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-accent">Anton Bochkovskyi</span>
          </h1>
          <p className="mt-4 md:text-xl font-medium">
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

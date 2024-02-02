import Content from '@/components/ui/content'
import Heading from '@/components/ui/heading'
import Technologies from '@/components/ui/technologies/technologies'
import { cn } from '@/utils'
import { FC } from 'react'

const About: FC = () => {
  return (
    <section
      className={cn('bg-light py-12 dark:bg-black md:py-20')}
      id="about-me"
    >
      <Content className="flex gap-6 md:gap-10">
        <article>
          <Heading size="h2" variant="underline">
            About Me
          </Heading>
          <div className="mt-6 space-y-4 font-medium md:text-xl">
            <p>
              I&apos;m a <strong>Front-End Developer</strong> specializing in
              React, Next.js, and Tailwind CSS, with a keen focus on crafting{' '}
              <b>responsive</b> and visually <b>stunning</b> web applications.
            </p>
            <p>
              I enjoy working closely with cross-functional teams, including
              designers and back-end developers, to{' '}
              <strong>transform ideas into reality</strong>. Clear
              communication, attention to detail, and a commitment to delivering{' '}
              <b>high-quality</b> code are values I uphold in my works.
            </p>
            <p>
              If you&apos;re in search of a developer who is <b>well-versed</b>{' '}
              in React, Next.js, and Tailwind CSS, and has a passion for
              crafting <b>responsive</b> and <b>user-centric</b> applications,
              I&apos;m eager to contribute my skills to your projects.
              Let&apos;s collaborate and build digital experiences that leave a{' '}
              <b>lasting impression</b>!
            </p>
          </div>
        </article>
        <Technologies className="self-start" />
      </Content>
    </section>
  )
}

export default About

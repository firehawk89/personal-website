import { FC, HTMLAttributes } from 'react'

import TechnologyIcons from '@/components/sections/about/technology-icons'
import Content from '@/components/ui/content'
import DownloadCVButton from '@/components/ui/download-cv-button'
import Heading from '@/components/ui/heading'
import { cn } from '@/utils'

const About: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-light dark:bg-black', className)} {...props}>
      <Content className="flex gap-6 md:gap-10">
        <article>
          <Heading level={2} size="h2" variant="underline">
            About Me
          </Heading>
          <div className="mt-6 space-y-4 font-medium md:text-lg">
            <p>
              I&apos;m a <strong>Full-Stack Developer</strong> with 3 years of
              experience building production-ready <b>AI platforms</b>,
              serverless backends, and complex frontends. I own features
              end-to-end - from system design through release and monitoring.
            </p>
            <p>
              My work spans B2B SaaS, consumer search platforms, and AI-powered
              products, with a strong focus on{' '}
              <strong>edge infrastructure</strong>, multi-provider LLM
              integrations, and clean, maintainable architecture. I mainly work
              with React, TypeScript, Node.js, Cloudflare, and PostgreSQL.
            </p>
            <p>
              If you&apos;re looking for someone who can ship{' '}
              <b>fast, reliable products at scale</b> - from frontend UX to
              backend infrastructure and deployment workflows - I&apos;m ready
              to contribute. Let&apos;s build something that lasts.
            </p>
          </div>
          <DownloadCVButton className="mt-6" />
        </article>
        <TechnologyIcons className="self-start" />
      </Content>
    </section>
  )
}

export default About

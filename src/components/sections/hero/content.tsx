'use client'

import Link from 'next/link'
import { FC } from 'react'

import { buttonVariants } from '@/components/ui/button'
import Content, { ContentProps } from '@/components/ui/content'
import DownloadCVButton from '@/components/ui/download-cv-button'
import Heading from '@/components/ui/heading'
import useTypewriter from '@/hooks/use-typewriter'
import { LINK } from '@/types/enums/Link'
import { cn } from '@/utils'

const HeroContent: FC<ContentProps> = ({ className, ...props }) => {
  const { visibleText, visibleAccentText } = useTypewriter({
    text: "Hi, I'm ",
    accentText: 'Anton Bochkovskyi',
  })

  return (
    <Content
      className={cn(
        'relative flex flex-col items-center justify-center text-center',
        className
      )}
      size="tight"
    >
      <article {...props}>
        <Heading position="center">
          {visibleText}
          <span className="text-accent">{visibleAccentText}</span>
        </Heading>

        <p className="mt-4 text-lg font-medium md:text-xl">
          Full-Stack Developer focused on scalable web apps, AI platforms, and
          cloud-based systems - from frontend UX to serverless backends and
          deployment workflows.
        </p>
      </article>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Link className={buttonVariants()} href={LINK.projects}>
          My Projects
        </Link>
        <DownloadCVButton variant="outline" />
      </div>
    </Content>
  )
}

export default HeroContent

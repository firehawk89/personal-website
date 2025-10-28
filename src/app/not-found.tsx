import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import Content from '@/components/ui/content'
import Heading from '@/components/ui/heading'
import { LINK } from '@/types/enums/Link'
import { cn } from '@/utils'

export default function NotFound() {
  return (
    <div className="relative h-full bg-ghost pt-header dark:bg-dark">
      <Image
        alt="Background"
        className="-z-5 object-cover object-center"
        fill
        sizes="100vw"
        src="/hero-bg.svg"
      />
      <Content className="relative flex h-full flex-col items-center justify-center gap-3 text-center md:gap-5">
        <Heading>Page Not Found</Heading>
        <p className="text-lg md:text-xl">
          The page you were looking for does not exists.
        </p>
        <Link className={cn(buttonVariants())} href={LINK.index}>
          Return Home
        </Link>
      </Content>
    </div>
  )
}

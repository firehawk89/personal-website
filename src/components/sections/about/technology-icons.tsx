import { FC, HTMLAttributes } from 'react'
import {
  SiCloudflare,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import TechnologyIconsItem from '@/components/sections/about/technology-icons-item'
import { cn } from '@/utils'

const TechnologyIcons: FC<HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => {
  return (
    <ul
      className={cn(
        'grid shrink-0 grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:grid-cols-3',
        className
      )}
      {...props}
    >
      <TechnologyIconsItem
        Icon={SiTypescript}
        className="bg-white text-[#2f74c0]"
        title="TypeScript"
      />
      <TechnologyIconsItem
        Icon={SiJavascript}
        className="bg-black text-[#efd81d]"
        title="JavaScript"
      />
      <TechnologyIconsItem
        Icon={SiReact}
        className="text-[#00d8ff]"
        title="React"
      />
      <TechnologyIconsItem
        Icon={SiNextdotjs}
        className="text-black dark:text-white"
        title="Next.js"
      />
      <TechnologyIconsItem
        Icon={SiTailwindcss}
        className="text-[#38bdf8]"
        title="Tailwind CSS"
      />
      <TechnologyIconsItem
        Icon={SiNodedotjs}
        className="text-[#539e43]"
        title="Node.js"
      />
      <TechnologyIconsItem
        Icon={SiCloudflare}
        className="text-[#f6821f]"
        title="Cloudflare"
      />
      <TechnologyIconsItem
        Icon={SiPostgresql}
        className="text-[#336791]"
        title="PostgreSQL"
      />
      <TechnologyIconsItem
        Icon={SiMongodb}
        className="text-[#00ed64]"
        title="MongoDB"
      />
      <TechnologyIconsItem
        Icon={SiHtml5}
        className="text-[#f15b29]"
        title="HTML5"
      />
      <TechnologyIconsItem
        Icon={SiCss3}
        className="text-[#1775bb]"
        title="CSS3"
      />
    </ul>
  )
}

export default TechnologyIcons

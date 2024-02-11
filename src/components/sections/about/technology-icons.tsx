import TechnologyIconsItem from '@/components/sections/about/technology-icons-item'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import { FaSass } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

interface TechnologyIconsProps extends HTMLAttributes<HTMLUListElement> {}

const TechnologyIcons: FC<TechnologyIconsProps> = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid flex-shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3',
        className
      )}
      {...props}
    >
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
      <TechnologyIconsItem
        Icon={SiJavascript}
        className="bg-black text-[#efd81d]"
        title="JavaScript"
      />
      <TechnologyIconsItem
        Icon={FaSass}
        className="text-[#c76494]"
        title="Sass"
      />
      <TechnologyIconsItem
        Icon={SiTailwindcss}
        className="text-[#38bdf8]"
        title="Tailwind CSS"
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
        Icon={SiTypescript}
        className="bg-white text-[#2f74c0]"
        title="TypeScript"
      />
    </ul>
  )
}

export default TechnologyIcons

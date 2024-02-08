import TechnologiesItem from '@/components/ui/technologies/technologies-item'
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

interface TechnologiesProps extends HTMLAttributes<HTMLUListElement> {}

const Technologies: FC<TechnologiesProps> = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid flex-shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3',
        className
      )}
      {...props}
    >
      <TechnologiesItem
        Icon={SiHtml5}
        className="text-[#f15b29]"
        title="HTML5"
      />
      <TechnologiesItem Icon={SiCss3} className="text-[#1775bb]" title="CSS3" />
      <TechnologiesItem
        Icon={SiJavascript}
        className="bg-black text-[#efd81d]"
        title="JavaScript"
      />
      <TechnologiesItem Icon={FaSass} className="text-[#c76494]" title="Sass" />
      <TechnologiesItem
        Icon={SiTailwindcss}
        className="text-[#38bdf8]"
        title="Tailwind CSS"
      />
      <TechnologiesItem
        Icon={SiReact}
        className="text-[#00d8ff]"
        title="React"
      />
      <TechnologiesItem
        Icon={SiNextdotjs}
        className="text-black dark:text-white"
        title="Next.js"
      />
      <TechnologiesItem
        Icon={SiTypescript}
        className="bg-white text-[#2f74c0]"
        title="TypeScript"
      />
    </ul>
  )
}

export default Technologies

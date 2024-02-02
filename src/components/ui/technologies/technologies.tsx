import TechnologiesItem from '@/components/ui/technologies/technologies-item'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import { FaReact, FaSass } from 'react-icons/fa'
import {
  SiJavascript,
  SiNextdotjs,
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
        Icon={SiJavascript}
        className="bg-black text-[#efd81d]"
        title="JavaScript"
      />
      <TechnologiesItem
        Icon={FaReact}
        className="text-[#00d8ff]"
        title="React"
      />
      <TechnologiesItem
        Icon={SiNextdotjs}
        className="text-black dark:text-white"
        title="Next.js"
      />
      <TechnologiesItem
        Icon={SiTailwindcss}
        className="text-[#38bdf8]"
        title="Tailwind CSS"
      />
      <TechnologiesItem
        Icon={SiTypescript}
        className="bg-white text-[#2f74c0]"
        title="TypeScript"
      />
      <TechnologiesItem Icon={FaSass} className="text-[#c76494]" title="Sass" />
    </ul>
  )
}

export default Technologies

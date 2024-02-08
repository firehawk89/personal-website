import SocialsItem from '@/components/ui/socials/socials-item'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface SocialsProps extends HTMLAttributes<HTMLUListElement> {
  orientation?: 'horizontal' | 'vertical'
}

const Socials: FC<SocialsProps> = ({ className, orientation, ...props }) => {
  return (
    <ul
      className={cn(
        'flex gap-5',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
      {...props}
    >
      <SocialsItem
        Icon={FaLinkedin}
        href="https://www.linkedin.com/in/anton-bochkovskyi/"
        title="LinkedIn"
      />
      <SocialsItem
        Icon={FaGithub}
        href="https://github.com/firehawk89"
        title="GitHub"
      />
    </ul>
  )
}

export default Socials

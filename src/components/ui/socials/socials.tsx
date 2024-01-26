import SocialsItem from '@/components/ui/socials/socials-item'
import { classnames } from '@/utils'
import { FC } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialsProps = {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

const Socials: FC<SocialsProps> = ({ className, orientation }) => {
  return (
    <ul
      className={classnames(
        'flex gap-5',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
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

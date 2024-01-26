import SocialsItem from '@/components/ui/socials/socials-item'
import { classnames } from '@/utils'
import { FC } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialsProps = {
  className?: string
}

const Socials: FC<SocialsProps> = ({ className }) => {
  return (
    <ul className={classnames('p-5 flex gap-8', className)}>
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

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
      <SocialsItem href="https://www.linkedin.com/in/anton-bochkovskyi/">
        <FaLinkedin />
      </SocialsItem>
      <SocialsItem href="https://github.com/firehawk89">
        <FaGithub />
      </SocialsItem>
    </ul>
  )
}

export default Socials

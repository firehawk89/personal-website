import IconsList, {
  IconsListProps,
} from '@/components/ui/icons-list/icons-list'
import IconsListItem from '@/components/ui/icons-list/icons-list-item'
import { FC } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface SocialsProps extends IconsListProps {}

const Socials: FC<SocialsProps> = ({ ...props }) => {
  return (
    <IconsList {...props}>
      <IconsListItem
        Icon={FaLinkedin}
        href="https://www.linkedin.com/in/anton-bochkovskyi/"
        title="LinkedIn"
      />
      <IconsListItem
        Icon={FaGithub}
        href="https://github.com/firehawk89"
        title="GitHub"
      />
    </IconsList>
  )
}

export default Socials

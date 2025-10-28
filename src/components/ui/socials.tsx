import { FC } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import IconsList, {
  IconsListProps,
} from '@/components/ui/icons-list/icons-list'
import IconsListItem from '@/components/ui/icons-list/icons-list-item'

const Socials: FC<IconsListProps> = ({ ...props }) => {
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

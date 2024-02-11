import { ComponentType, FC, LiHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

interface IconsListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  Icon: ComponentType<IconBaseProps>
  href: string
  title: string
}

const IconsListItem: FC<IconsListItemProps> = ({
  Icon,
  className,
  href,
  title,
  ...props
}) => {
  return (
    <li className={className} {...props}>
      <a
        className="transition-colors hover:text-accent"
        href={href}
        target="_blank"
      >
        <Icon
          aria-hidden="true"
          className="h-7 w-7 md:h-8 md:w-8"
          focusable="false"
        />
        <span className="sr-only">{title}</span>
      </a>
    </li>
  )
}

export default IconsListItem

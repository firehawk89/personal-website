import { ComponentType, FC, LiHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

interface SocialsItemProps extends LiHTMLAttributes<HTMLLIElement> {
  Icon: ComponentType<IconBaseProps>
  href: string
  title: string
}

const SocialsItem: FC<SocialsItemProps> = ({
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
        <Icon aria-hidden="true" className="h-8 w-8" focusable="false" />
        <span className="sr-only">{title}</span>
      </a>
    </li>
  )
}

export default SocialsItem

import Link from 'next/link'
import { ComponentType, FC } from 'react'
import { IconBaseProps } from 'react-icons'

type SocialsItemProps = {
  Icon: ComponentType<IconBaseProps>
  className?: string
  href: string
  title: string
}

const SocialsItem: FC<SocialsItemProps> = ({
  Icon,
  className,
  href,
  title,
}) => {
  return (
    <li className={className}>
      <Link
        className="hover:text-accent transition-colors"
        href={href}
        target="_blank"
      >
        <Icon aria-hidden="true" className="w-8 h-8" focusable="false" />
        <span className="sr-only">{title}</span>
      </Link>
    </li>
  )
}

export default SocialsItem

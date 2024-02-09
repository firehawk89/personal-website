import { cn } from '@/utils'
import { ComponentType, FC, HTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

interface TechnologyIconsItemProps extends HTMLAttributes<HTMLLIElement> {
  Icon: ComponentType<IconBaseProps>
  title: string
}

const TechnologyIconsItem: FC<TechnologyIconsItemProps> = ({
  Icon,
  className,
  title,
  ...props
}) => {
  return (
    <li
      className={cn('h-fit w-fit overflow-hidden rounded-md', className)}
      {...props}
    >
      <Icon
        aria-hidden="true"
        className="h-16 w-16 md:h-24 md:w-24"
        focusable="false"
      />
      <span className="sr-only">{title}</span>
    </li>
  )
}

export default TechnologyIconsItem

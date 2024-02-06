import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import { CiImageOff } from 'react-icons/ci'

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center bg-neutral-200 dark:bg-neutral-800',
        className
      )}
      {...props}
    >
      <CiImageOff className="h-12 w-12 md:h-20 md:w-20" />
      <span className="sr-only">Image Not Found</span>
    </div>
  )
}

export default ImagePlaceholder

import Link from 'next/link'
import { FC, ReactNode } from 'react'

import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { CV_FILENAME, CV_PATH, cn } from '@/utils'

interface DownloadCVButtonProps
  extends Pick<ButtonProps, 'variant' | 'size' | 'className'> {
  children?: ReactNode
}

const DownloadCVButton: FC<DownloadCVButtonProps> = ({
  children = 'Download CV',
  className,
  size,
  variant,
}) => {
  return (
    <Link
      className={cn(buttonVariants({ size, variant }), className)}
      download={CV_FILENAME}
      href={CV_PATH}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  )
}

export default DownloadCVButton

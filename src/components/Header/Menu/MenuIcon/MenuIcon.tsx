'use client'

import { FC, useState } from 'react'
import useMediaQuery from '@/hooks/use-media-query'
import { MOBILE_BREAKPOINT, classnames } from '@/utils'
import MenuIconBar from './MenuIconBar'

type MenuIconProps = {
  className?: string
}

const MenuIcon: FC<MenuIconProps> = ({ className }) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = () => setIsClicked(!isClicked)

  return (
    <div
      className={classnames(
        'cursor-pointer w-7',
        isMobile ? 'flex flex-col gap-2' : 'hidden',
        className
      )}
      onClick={handleClick}
    >
      <MenuIconBar
        className={isClicked ? 'animate-top-down' : 'animate-top-up'}
      />
      <MenuIconBar
        className={isClicked ? 'animate-scaled-none' : 'animate-scaled'}
      />
      <MenuIconBar
        className={isClicked ? 'animate-bottom-up' : 'animate-bottom-down'}
      />
    </div>
  )
}

export default MenuIcon

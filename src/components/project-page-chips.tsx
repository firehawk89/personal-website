'use client'

import { FC, HTMLAttributes } from 'react'

import Chips from '@/components/ui/chips/chips'
import ChipsItem from '@/components/ui/chips/chips-item'
import useMediaQuery from '@/hooks/use-media-query'
import { MOBILE_BREAKPOINT } from '@/utils'

interface ProjectPageChipsProps extends HTMLAttributes<HTMLUListElement> {
  data: string[]
}

const ProjectPageChips: FC<ProjectPageChipsProps> = ({ className, data }) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)

  return (
    <Chips className={className}>
      {data.map((item) => (
        <ChipsItem key={item} label={item} size={isMobile ? 'sm' : 'default'} />
      ))}
    </Chips>
  )
}

export default ProjectPageChips

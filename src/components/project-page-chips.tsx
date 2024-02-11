'use client'

import Chips, { ChipsProps } from '@/components/ui/chips/chips'
import ChipsItem from '@/components/ui/chips/chips-item'
import useMediaQuery from '@/hooks/use-media-query'
import { MOBILE_BREAKPOINT } from '@/utils'
import { FC } from 'react'

interface ProjectPageChipsProps extends ChipsProps {
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

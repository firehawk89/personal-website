'use client'

import { useState, useCallback, useEffect } from 'react'

interface MatchMediaChangeEvent extends Event {
  matches: boolean
}

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState<boolean>(false)

  const updateTarget = useCallback((e: MatchMediaChangeEvent) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [updateTarget, width])

  return targetReached
}

export default useMediaQuery

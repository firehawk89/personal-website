'use client'

import { useCallback, useEffect, useState } from 'react'

const LETTER_TYPE_DURATION_MS = 100

interface UseTypewriterParams {
  text: string
  accentText?: string
  letterTypeDuration?: number
}

const useTypewriter = ({
  text,
  accentText,
  letterTypeDuration = LETTER_TYPE_DURATION_MS,
}: UseTypewriterParams) => {
  const [visibleText, setVisibleText] = useState('')
  const [visibleAccentText, setVisibleAccentText] = useState('')

  const [isTextFinished, setIsTextFinished] = useState(false)
  const [isAccentTextFinished, setIsAccentTextFinished] = useState(false)

  const fullTextLength = text.length + (accentText?.length ?? 0)
  const isFinished = isTextFinished && isAccentTextFinished

  const handleTextTyping = useCallback(
    (letterIndex: number) => {
      setVisibleText(text.slice(0, letterIndex + 1))

      if (letterIndex === text.length - 1) {
        setIsTextFinished(true)
      }
    },
    [text]
  )

  const handleAccentTextTyping = useCallback(
    (letterIndex: number) => {
      if (!accentText) return

      const accentTextIndex = letterIndex - text.length
      setVisibleAccentText(accentText.slice(0, accentTextIndex + 1))

      if (accentTextIndex === accentText.length - 1) {
        setIsAccentTextFinished(true)
      }
    },
    [accentText, text.length]
  )

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      if (i < text.length) {
        handleTextTyping(i)
      } else if (accentText && i < fullTextLength) {
        handleAccentTextTyping(i)
      } else {
        setIsTextFinished(true)
        setIsAccentTextFinished(true)
        clearInterval(interval)
      }
      i++
    }, letterTypeDuration)

    return () => clearInterval(interval)
  }, [
    accentText,
    fullTextLength,
    handleAccentTextTyping,
    handleTextTyping,
    letterTypeDuration,
    text.length,
  ])

  return {
    isTextFinished,
    isAccentTextFinished,
    isFinished,
    visibleAccentText,
    visibleText,
  }
}

export default useTypewriter

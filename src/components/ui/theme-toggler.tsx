'use client'

import Button from '@/components/ui/button'
import Theme from '@/types/enums/Theme'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'

type ThemeTogglerProps = { className?: string }

const ThemeToggler: FC<ThemeTogglerProps> = ({ className }) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDarkTheme = (resolvedTheme as Theme) === 'dark'

  const toggleTheme = () => (isDarkTheme ? setTheme('light') : setTheme('dark'))

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button className={className} variant="icon">
        <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-700" />
      </Button>
    )
  }

  return (
    <>
      {!mounted ? (
        <Button className={className} variant="icon">
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-700" />
        </Button>
      ) : (
        <Button className={className} onClick={toggleTheme} variant="icon">
          {
            // TODO: Add sr-only text
          }
          {isDarkTheme ? (
            <CiDark className="h-6 w-6" />
          ) : (
            <CiLight className="h-6 w-6" />
          )}
        </Button>
      )}
    </>
  )
}

export default ThemeToggler

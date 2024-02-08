'use client'

import Button, { ButtonProps } from '@/components/ui/button'
import Theme from '@/types/enums/Theme'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'

interface ThemeTogglerProps extends ButtonProps {}

const ThemeToggler: FC<ThemeTogglerProps> = ({ className, ...props }) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDarkTheme = (resolvedTheme as Theme) === 'dark'

  const toggleTheme = () => (isDarkTheme ? setTheme('light') : setTheme('dark'))

  useEffect(() => setMounted(true), [])

  return (
    <>
      {!mounted ? (
        <Button className={className} variant="icon" {...props}>
          <div className="h-7 w-7 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700" />
        </Button>
      ) : (
        <Button
          className={className}
          onClick={toggleTheme}
          variant="icon"
          {...props}
        >
          {isDarkTheme ? (
            <CiDark className="h-7 w-7" />
          ) : (
            <CiLight className="h-7 w-7" />
          )}
          <span className="sr-only">
            {isDarkTheme ? 'Toggle light theme' : 'Toggle dark theme'}
          </span>
        </Button>
      )}
    </>
  )
}

export default ThemeToggler

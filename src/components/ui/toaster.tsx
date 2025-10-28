'use client'

import { useTheme } from 'next-themes'
import { FC } from 'react'
import { Toaster as SonnerToaster } from 'sonner'

import { THEME } from '@/types/enums/Theme'

const Toaster: FC = () => {
  const { resolvedTheme } = useTheme()

  return (
    <SonnerToaster
      position="bottom-center"
      richColors
      theme={resolvedTheme === THEME.dark ? 'dark' : 'light'}
      toastOptions={{ classNames: { title: 'text-sm' } }}
    />
  )
}

export default Toaster

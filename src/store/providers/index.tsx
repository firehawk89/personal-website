import { FC, ReactNode } from 'react'

import Toaster from '@/components/ui/toaster'
import ThemeProvider from '@/store/providers/theme-provider'

import HeaderProvider from './header-provider'

type ProvidersProps = { children: ReactNode }

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <HeaderProvider>{children}</HeaderProvider>
      <Toaster />
    </ThemeProvider>
  )
}

export default Providers

import ThemeProvider from '@/store/providers/theme-provider'
import { FC, ReactNode } from 'react'

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
    </ThemeProvider>
  )
}

export default Providers

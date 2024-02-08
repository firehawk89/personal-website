import ThemeProvider from '@/store/providers/theme-provider'
import { FC, ReactNode } from 'react'
import { Toaster } from 'sonner'

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
      <Toaster
        position="bottom-center"
        richColors
        theme="system"
        toastOptions={{ classNames: { title: 'text-sm' } }}
      />
    </ThemeProvider>
  )
}

export default Providers

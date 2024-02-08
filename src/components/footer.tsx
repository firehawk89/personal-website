import Socials from '@/components/ui/socials/socials'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'flex items-center justify-between gap-5 border-t border-accent bg-dark px-8 py-5 text-light lg:px-10',
        className
      )}
    >
      <p>&copy; {new Date().getFullYear()} Bochkovskyi Anton</p>
      <Socials />
    </footer>
  )
}

export default Footer

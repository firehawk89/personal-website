export const LINK = {
  about: '/#about-me',
  contact: '/#contact-me',
  index: '/',
  projects: '/#my-projects',
} as const

type Link = keyof typeof LINK

export default Link

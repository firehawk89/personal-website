type Project = {
  body: Promise<string> | string
  features: string[]
  github: string
  image: string
  slug: string
  technologies: string[]
  title: string
  website: string
}

export default Project

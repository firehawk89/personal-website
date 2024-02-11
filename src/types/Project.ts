type Project = {
  body: Promise<string> | string
  features: string[]
  image: string
  slug: string
  technologies: string[]
  title: string
}

export default Project

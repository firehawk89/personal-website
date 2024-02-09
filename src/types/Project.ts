type Project = {
  body: Promise<string> | string
  description: string
  image: string
  slug: string
  technologies: string[]
  title: string
}

export default Project

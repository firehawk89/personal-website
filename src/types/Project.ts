type Project = {
  body: Promise<string> | string
  image: string
  slug: string
  technologies: string[]
  title: string
}

export default Project

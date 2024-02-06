import Project from '@/types/Project'
import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'
import path from 'path'

const PROJECTS_PATH = './content/projects'
const FILE_EXTENSION = '.md'

export const getProjects = async (): Promise<Project[]> => {
  const dirPath = path.join(process.cwd(), PROJECTS_PATH)
  const files = await readdir(dirPath)

  const slugs = files
    .filter((file) => file.endsWith(FILE_EXTENSION))
    .map((file) => file.replace(FILE_EXTENSION, ''))

  let projects: Project[] = []

  if (!slugs.length) return projects

  for (const slug of slugs) {
    try {
      const project = await getProject(slug)
      projects.push({ ...project, slug })
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error getting project ${slug}: ${error.message}`)
      }
    }
  }

  return projects
}

export const getProject = async (slug: string): Promise<Project> => {
  const filePath = path.join(
    process.cwd(),
    PROJECTS_PATH,
    `${slug}${FILE_EXTENSION}`
  )

  const text = await readFile(filePath, 'utf-8')
  if (!text.trim()) throw new Error('Markdown file is empty!')

  const {
    content,
    data: { image, technologies, title },
  } = matter(text)

  const renderer = new marked.Renderer()
  renderer.paragraph = function (text) {
    return text
  }
  const body = marked(content, { renderer })

  return { body, image, slug, technologies, title }
}
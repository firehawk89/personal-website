import Project from '@/types/Project'
import ProjectMetadata from '@/types/ProjectMetadata'
import fs from 'fs'
import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'
import path from 'path'

const PROJECTS_PATH = './content/projects'
const FILE_EXTENSION = '.md'
const DIR_PATH = path.join(process.cwd(), PROJECTS_PATH)

export const getProjects = async (): Promise<Project[]> => {
  const slugs = await getSlugs()

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
  const filePath = getProjectFilePath(slug)

  const text = await readFile(filePath, 'utf-8')
  if (!text.trim()) throw new Error('Markdown file is empty!')

  const {
    content,
    data: { features, github, image, technologies, title, website },
  } = matter(text)

  const renderer = new marked.Renderer()
  renderer.paragraph = function (text) {
    return text
  }
  const body = marked(content, { renderer })

  return { body, features, github, image, slug, technologies, title, website }
}

export const getProjectsMetadata = async (): Promise<ProjectMetadata[]> => {
  const slugs = await getSlugs()

  let projectsMetadata: ProjectMetadata[] = []

  if (!slugs.length) return projectsMetadata

  for (const slug of slugs) {
    const projectModifiedDate = getProjectModifiedDate(slug)
    projectsMetadata.push({ lastModified: projectModifiedDate, slug })
  }

  return projectsMetadata
}

export const getSlugs = async (): Promise<string[]> => {
  const files = await readdir(DIR_PATH)
  const slugs = files
    .filter((file) => file.endsWith(FILE_EXTENSION))
    .map((file) => file.replace(FILE_EXTENSION, ''))
  return slugs
}

export const getProjectFilePath = (slug: string): string => {
  return path.join(process.cwd(), PROJECTS_PATH, `${slug}${FILE_EXTENSION}`)
}

export const getProjectModifiedDate = (slug: string): Date => {
  const filePath = getProjectFilePath(slug)
  const fileStats = fs.statSync(filePath)
  return new Date(fileStats.mtime.toISOString())
}

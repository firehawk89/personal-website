import { FC, HTMLAttributes } from 'react'

import ProjectCard from '@/components/sections/projects/project-card'
import Content from '@/components/ui/content'
import Heading from '@/components/ui/heading'
import Project from '@/types/Project'
import { cn } from '@/utils'
import { getProjects } from '@/utils/projects'

const Projects: FC<HTMLAttributes<HTMLDivElement>> = async ({
  className,
  ...props
}) => {
  const projects: Project[] = await getProjects()

  return (
    <section className={cn('bg-ghost dark:bg-dark', className)} {...props}>
      <Content>
        <Heading position="center" size="h2" variant="underline">
          My Projects
        </Heading>
        {!projects?.length ? (
          <p className="mx-auto mt-7 max-w-lg text-center text-lg md:text-xl">
            No projects found at the moment. Check back later for updates or
            explore other sections of the site.
          </p>
        ) : (
          <section className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 md:mt-14 lg:max-w-none lg:grid-cols-2 xl:gap-12">
            {projects.map((project) => (
              <ProjectCard
                data={project}
                imageSizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 100vw"
                key={project.slug}
              />
            ))}
          </section>
        )}
      </Content>
    </section>
  )
}

export default Projects

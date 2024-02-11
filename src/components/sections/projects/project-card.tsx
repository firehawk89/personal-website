// TODO: Add projects individual routes

import Card from '@/components/ui/card'
import Chips from '@/components/ui/chips/chips'
import ChipsItem from '@/components/ui/chips/chips-item'
import Heading from '@/components/ui/heading'
import ImagePlaceholder from '@/components/ui/image-placeholder'
import Project from '@/types/Project'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  data: Project
  imageSizes?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  className,
  data: { description, image, slug, technologies, title },
  imageSizes,
  ...props
}) => {
  return (
    <article className={cn('group', className)} {...props}>
      <Card>
        <Link className="relative block aspect-video" href={`/${slug}`}>
          {image ? (
            <Image
              alt={title || slug}
              fill
              sizes={imageSizes || '100vw'}
              src={image}
            />
          ) : (
            <ImagePlaceholder />
          )}
          <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end gap-3 bg-gradient-to-t from-dark p-4 text-light opacity-0 transition-all group-hover:opacity-100 sm:gap-5 sm:px-6 sm:py-7">
            <Heading level={3} size="h3">
              {title || slug}
            </Heading>
            <p
              className="line-clamp-1 sm:line-clamp-2 md:line-clamp-3"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {technologies && (
              <Chips>
                {technologies.map((technology) => (
                  <ChipsItem key={technology} label={technology} size="sm" />
                ))}
              </Chips>
            )}
          </div>
        </Link>
      </Card>
    </article>
  )
}

export default ProjectCard

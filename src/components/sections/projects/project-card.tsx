import Card from '@/components/ui/card'
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
  data: { body, image, slug, technologies, title },
  imageSizes,
}) => {
  return (
    <article className={cn('group', className)}>
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
            <Heading size="h3">{title || slug}</Heading>
            <p
              className="line-clamp-1 sm:line-clamp-2 md:line-clamp-3"
              dangerouslySetInnerHTML={{ __html: body }}
            />
            {technologies && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <span
                    className="rounded-xl bg-accent bg-opacity-75 px-2 py-1 text-sm font-semibold"
                    key={index + 1}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </Card>
    </article>
  )
}

export default ProjectCard

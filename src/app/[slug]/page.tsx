import ProjectPageChips from '@/components/project-page-chips'
import Card from '@/components/ui/card'
import Content from '@/components/ui/content'
import Heading from '@/components/ui/heading'
import IconsList from '@/components/ui/icons-list/icons-list'
import IconsListItem from '@/components/ui/icons-list/icons-list-item'
import ImagePlaceholder from '@/components/ui/image-placeholder'
import { getProject, getSlugs } from '@/utils/projects'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { TfiWorld } from 'react-icons/tfi'

type ProjectPageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params: { slug } }: ProjectPageProps) {
  const { body, title } = await getProject(slug)

  return {
    description: body,
    title,
  }
}

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function Project({ params: { slug } }: ProjectPageProps) {
  const { body, features, github, image, technologies, title, website } =
    await getProject(slug)

  return (
    <section className="pt-header">
      <Content className="pb-16 pt-12 md:pb-24 md:pt-20" size="tight">
        <article className="flex flex-col gap-5 md:gap-7">
          <header>
            {website || github ? (
              <div className="flex items-center justify-between">
                <Heading size="h1">{title}</Heading>
                <IconsList>
                  {website && (
                    <IconsListItem
                      Icon={TfiWorld}
                      href={website}
                      title="Go to Website"
                    />
                  )}
                  {github && (
                    <IconsListItem
                      Icon={FaGithub}
                      href={github}
                      title="Go to GitHub repository"
                    />
                  )}
                </IconsList>
              </div>
            ) : (
              <Heading size="h1">{title}</Heading>
            )}
            {body && (
              <p
                className="mt-7 md:text-lg"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            )}
          </header>
          <Card className="relative aspect-video">
            {image ? (
              <Image alt={title || slug} fill sizes="100vw" src={image} />
            ) : (
              <ImagePlaceholder />
            )}
          </Card>
          {!!features.length && (
            <div>
              <Heading level={2} size="h3">
                Features
              </Heading>
              <ul className="mt-3 list-inside list-disc marker:text-accent md:text-lg">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {!!technologies.length && (
            <div>
              <Heading level={2} size="h3">
                Used Tools & Technologies
              </Heading>
              <ProjectPageChips className="mt-2 md:mt-3" data={technologies} />
            </div>
          )}
        </article>
      </Content>
    </section>
  )
}

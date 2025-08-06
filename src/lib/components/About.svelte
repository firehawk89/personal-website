<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { buttonVariants } from '@/lib/components/ui/Button.svelte'
  import Content from '@/lib/components/ui/Content.svelte'
  import Heading from '@/lib/components/ui/Heading.svelte'
  import { cn } from '@/lib/utils/misc'
  import TechnologyList from '@/lib/components/ui/technology-list/TechnologyList.svelte'

  const CV_FILENAME = 'Anton_Bochkovskyi_Front-End_Developer_CV.pdf'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section class={cn('bg-light dark:bg-black', className)} {...props}>
  <Content class="flex gap-6 md:gap-10">
    <article>
      <Heading level={2} size="h2" variant="underline">About Me</Heading>

      <div class="mt-6 space-y-4 font-medium md:text-lg">
        <p>
          I&apos;m a <strong>Front-End Developer</strong> specializing in React, Next.js, and
          Tailwind CSS, with a keen focus on crafting <b>responsive</b> and visually <b>stunning</b>
          web applications.
        </p>

        <p>
          I enjoy working in team and <strong>transforming ideas into reality</strong>. Clear
          communication, attention to detail, and a commitment to delivering <b>high-quality</b> code
          are values I uphold in my works.
        </p>

        <p>
          If you&apos;re in search of a developer who is <b>well-versed</b> in React, Next.js, and
          Tailwind CSS, and has a passion for crafting <b>responsive</b> and
          <b>user-centric</b>
          applications, I&apos;m eager to contribute my skills to your projects. Let&apos;s collaborate
          and build digital experiences that leave a <b>lasting impression</b>!
        </p>
      </div>

      <a
        class={cn('mt-6', buttonVariants())}
        download={CV_FILENAME}
        href={`/${CV_FILENAME}`}
        rel="noreferrer"
        target="_blank"
      >
        Download CV
      </a>
    </article>

    <TechnologyList class="self-start" />
  </Content>
</section>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { buttonVariants } from '@/lib/components/ui/Button.svelte'
  import Content from '@/lib/components/ui/Content.svelte'
  import Heading from '@/lib/components/ui/Heading.svelte'
  import { Routes } from '@/lib/types/misc'
  import { cn } from '@/lib/utils/misc'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section class={cn('bg-ghost pt-header dark:bg-dark relative h-[100dvh]', className)} {...props}>
  <enhanced:img
    class="absolute top-0 left-0 z-0 h-full w-full object-cover object-center"
    src="../assets/hero-bg.svg"
    alt="Page Background"
  />

  <Content
    class="relative z-[1] flex flex-col items-center justify-center text-center"
    size="tight"
  >
    <article>
      <Heading position="center">
        Hi, I&apos;m <span class="text-accent">Anton Bochkovskyi</span>
      </Heading>

      <p class="mt-4 text-lg font-medium md:text-xl">
        Motivated Front-End Developer with a passion for creating engaging, elegant and responsive
        user interfaces.
      </p>
    </article>

    <a class={cn('mt-5', buttonVariants({ variant: 'outline' }))} href={Routes.Projects}>
      My Projects
    </a>
  </Content>

  <!-- <Socials
        className="absolute bottom-8 left-8 hidden md:flex"
        orientation="vertical"
      /> -->
</section>

<script lang="ts">
  import { cn } from '@/lib/utils/misc'
  import type { HTMLLiAttributes } from 'svelte/elements'

  interface IconsListItemProps extends HTMLLiAttributes {
    icon: string
    href: string
    title: string
  }

  const { icon, href, title, class: className, ...props }: IconsListItemProps = $props()
</script>

<li class={cn('flex', className)} {...props}>
  <a
    {href}
    class="hover:text-accent flex transition-colors"
    rel="noopener noreferrer"
    target="_blank"
  >
    <span aria-hidden="true" class={cn('size-8 md:size-10', icon)}></span>
    <span class="sr-only">{title}</span>
  </a>
</li>

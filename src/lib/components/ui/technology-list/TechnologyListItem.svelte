<script lang="ts">
  import { cn } from '@/lib/utils/misc'
  import type { HTMLAttributes } from 'svelte/elements'

  interface TechnologyListItemProps extends HTMLAttributes<HTMLLIElement> {
    icon: string
    title: string
  }

  const { class: className, icon, title, ...props }: TechnologyListItemProps = $props()
</script>

<li class={cn('h-fit w-fit overflow-hidden rounded-md', className)} {...props}>
  <span aria-hidden="true" class={cn('size-16 md:size-24', icon)}></span>
  <span class="sr-only">{title}</span>
</li>

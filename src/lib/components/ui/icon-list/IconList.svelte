<script lang="ts">
  import { cn } from '@/lib/utils/misc'
  import type { HTMLAttributes } from 'svelte/elements'

  export interface IconsListProps extends HTMLAttributes<HTMLUListElement> {
    orientation?: 'horizontal' | 'vertical'
  }

  const {
    children,
    class: className,
    orientation = 'horizontal',
    ...props
  }: IconsListProps = $props()
</script>

<ul
  class={cn('flex gap-5', orientation === 'vertical' ? 'flex-col' : 'flex-row', className)}
  {...props}
>
  {@render children?.()}
</ul>

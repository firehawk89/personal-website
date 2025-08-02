<script lang="ts">
  import { cn } from '@/lib/utils/misc'
  import { type VariantProps, cva } from 'class-variance-authority'
  import type { HTMLAttributes } from 'svelte/elements'

  const contentVariants = cva('mx-auto h-full w-full', {
    defaultVariants: {
      size: 'default'
    },
    variants: {
      size: {
        default: 'max-w-7xl px-5',
        tight: 'max-w-4xl px-5',
        wide: 'px-8 lg:px-10'
      }
    }
  })

  interface ContentProps
    extends HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof contentVariants> {}

  const { size, class: className, children, ...props }: ContentProps = $props()
</script>

<div class={cn(contentVariants({ size }), className)} {...props}>
  {@render children?.()}
</div>

<script lang="ts" module>
  import { type VariantProps, cva } from 'class-variance-authority'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  export const buttonVariants = cva(
    'font-medium transition-all active:scale-95 md:text-lg disabled:pointer-events-none',
    {
      defaultVariants: {
        size: 'default',
        variant: 'default'
      },
      variants: {
        size: {
          default: 'block w-fit py-2 px-5 rounded-md',
          sm: 'block w-fit p-2'
        },
        variant: {
          default:
            'border-2 border-accent bg-accent text-light md:hover:bg-accent-light disabled:border-accent-light disabled:bg-accent-light md:hover:border-accent-light',
          icon: 'bg-transparent md:hover:text-accent',
          outline:
            'border-2 border-accent bg-transparent text-accent disabled:border-accent-light disabled:text-accent-light md:hover:bg-accent md:hover:text-light'
        }
      }
    }
  )

  export interface ButtonProps extends HTMLButtonAttributes, VariantProps<typeof buttonVariants> {}
</script>

<script lang="ts">
  import { cn } from '@/lib/utils/misc'

  const { children, class: className, size, variant, ...props }: ButtonProps = $props()
</script>

<button class={cn(buttonVariants({ size, variant }), className)} {...props}>
  {@render children?.()}
</button>

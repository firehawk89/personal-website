<script lang="ts">
  import TechnologyListItem from '@/lib/components/ui/technology-list/TechnologyListItem.svelte'
  import { cn } from '@/lib/utils/misc'
  import type { HTMLAttributes } from 'svelte/elements'

  const { class: className, ...props }: HTMLAttributes<HTMLUListElement> = $props()
</script>

<ul
  class={cn(
    'grid flex-shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3',
    className
  )}
  {...props}
>
  <TechnologyListItem icon="icon-[mdi--language-html5]" class="text-[#f15b29]" title="HTML5" />
  <TechnologyListItem icon="icon-[mdi--language-css3]" class="text-[#1775bb]" title="CSS3" />
  <TechnologyListItem
    icon="icon-[mdi--language-javascript]"
    class="text-[#efd81d]"
    title="JavaScript"
  />
  <TechnologyListItem icon="icon-[mdi--sass]" class="text-[#c76494]" title="Sass" />
  <TechnologyListItem icon="icon-[mdi--tailwind]" class="text-[#38bdf8]" title="Tailwind CSS" />
  <TechnologyListItem icon="icon-[mdi--react]" class="text-[#00d8ff]" title="React" />
  <TechnologyListItem
    icon="icon-[logos--nextjs-icon]"
    class="text-black dark:text-white"
    title="Next.js"
  />
  <TechnologyListItem
    icon="icon-[mdi--language-typescript]"
    class="text-[#2f74c0]"
    title="TypeScript"
  />
</ul>

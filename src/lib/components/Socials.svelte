<script lang="ts">
  import type { IconsListProps } from '@/lib/components/ui/icon-list/IconList.svelte'
  import IconList from '@/lib/components/ui/icon-list/IconList.svelte'
  import IconListItem from '@/lib/components/ui/icon-list/IconListItem.svelte'

  const props: IconsListProps = $props()
</script>

<IconList {...props}>
  <IconListItem
    icon="icon-[mdi--linkedin]"
    href="https://www.linkedin.com/in/anton-bochkovskyi/"
    title="LinkedIn"
  />
  <IconListItem icon="icon-[mdi--github]" href="https://github.com/firehawk89" title="GitHub" />
</IconList>

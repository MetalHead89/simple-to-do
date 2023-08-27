<template>
<div class="list">
  {{ props.title }}
</div>
</template>

<script setup  lang="ts">
  const props = defineProps<{
    title?: string
  }>()
</script>

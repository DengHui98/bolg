<template>
  <div class="flex flex-col items-center justify-center opacity-65">
    <bl-icon type="empty" :size="size"></bl-icon>
    <span class="text-3xl">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import BlIcon from '@/components/BlIcon'
interface Props {
  size?: string
  text?: string
}
const { size = '12rem', text = 'Empty' } = defineProps<Props>()
</script>

<style scoped></style>

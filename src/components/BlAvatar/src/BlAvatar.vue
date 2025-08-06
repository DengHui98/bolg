<template>
  <img :src="src" :class="[bounded ? 'rounded-[50%]' : '', sizeObj[size]]" alt="Avatar" />
</template>

<script setup lang="ts">
interface Props {
  src: string
  size?: SizeType
  bounded?: boolean
}
const sizeObj = {
  small: 'w-8 h-8',
  medium: 'w-12 h-12',
  large: 'w-16 h-16',
  xlarge: 'w-20 h-20',
}

// 获取Size的值的联合类型
type SizeType = keyof typeof sizeObj
const { src, size = 'medium', bounded = false } = defineProps<Props>()
</script>

<style scoped></style>

<template>
  <i
    :class="`iconfont icon-${type}`"
    :style="{
      fontSize: size,
    }"
  ></i>
</template>

<script setup lang="ts">
interface Props {
  type: IconType // 使用从脚本生成的类型
  size?: number | string
}

const { type, size = '1rem' } = defineProps<Props>()
</script>

<style scoped></style>

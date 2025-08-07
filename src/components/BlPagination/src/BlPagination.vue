<template>
  <div class="flex gap-4 items-center justify-center cursor-pointer bl-pagination">
    <!-- 开始 -->
    <bl-icon
      type="arrow-up"
      :class="['-rotate-90', { 'opacity-50 cursor-not-allowed': currentPage === 1 }]"
      @click="handlePage(currentPage - 1)"
    ></bl-icon>
    <!-- 中间页码 -->
    <ul class="flex gap-4 items-center justify-center">
      <li
        v-for="page in pages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="handlePage(page)"
      >
        <span>{{ page }}</span>
      </li>
    </ul>
    <!-- 结束 -->
    <bl-icon
      type="arrow-down"
      :class="['-rotate-90', { 'opacity-50 cursor-not-allowed': currentPage === totalPages }]"
      @click="handlePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    ></bl-icon>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BlIcon from '@/components/BlIcon'
interface Props {
  total: number
  pageSize: number
  pagerCount?: 5 | 7 | 9 | 11 | 13 | 15
}
const { total, pageSize, pagerCount = 7 } = defineProps<Props>()

const currentPage = ref(1)

// 计算总页数
const totalPages = Math.ceil(total / pageSize)
// 计算页码边界
const offsetPage = (pagerCount - 1) / 2

// const pages = ref<(number | string)[]>([])

const pages = computed(() => {
  const pagesArray: (number | string)[] = []
  let startPage: number
  let endPage: number
  if (totalPages <= pagerCount) {
    startPage = 1
    endPage = totalPages
  } else {
    if (currentPage.value < offsetPage + 2) {
      startPage = 1
      endPage = pagerCount - 1
    } else if (currentPage.value > totalPages - offsetPage) {
      startPage = totalPages - (pagerCount - 1)
      endPage = totalPages
    } else {
      startPage = currentPage.value - (offsetPage - 1)
      endPage = currentPage.value + (offsetPage - 1)
    }
  }
  if (startPage > 2) {
    pagesArray.push(1)
    pagesArray.push('...')
  }
  for (let i = startPage; i <= endPage; i++) {
    pagesArray.push(i)
  }
  if (endPage < totalPages) {
    pagesArray.push('...')
    pagesArray.push(totalPages)
  }
  console.log(pagesArray)
  return pagesArray
})

const handlePage = (page: number | string) => {
  if (typeof page === 'number') {
    if (page < 1 || page > totalPages) return
    currentPage.value = page
  }
}
</script>

<style scoped>
@reference "tailwindcss";
.bl-pagination {
  font-size: 1.2rem;
  i,
  li {
    @apply bg-sky-400 text-white w-8 h-8 flex items-center justify-center hover:bg-sky-900 rounded-[2px];
  }
  li.active {
    @apply bg-sky-600;
  }
}
</style>

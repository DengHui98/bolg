<template>
  <div>
    <bl-icon type="success" size="2rem"></bl-icon>
    <bl-icon type="filter" size="2rem"></bl-icon>
    <bl-empty></bl-empty>
    <bl-avatar src="https://placebear.com/800/600" size="large"></bl-avatar>
    <bl-avatar src="https://placebear.com/800/600" size="large" bounded></bl-avatar>
    <bl-pagination :total="100" :page-size="10" :current="1"></bl-pagination>
  </div>
</template>
<script setup lang="ts">
import BlIcon from './components/BlIcon'
import BlEmpty from './components/BlEmpty'
import BlAvatar from './components/BlAvatar'
import BlPagination from './components/BlPagination'
</script>

<style scoped></style>

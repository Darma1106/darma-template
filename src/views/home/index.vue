<template>
  <HelloWorld :msg="text" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const text = ref('Vite + Vue3 + Antdv-3 + Less + Typescript + Tailwind 模板')
</script>

<style lang="less" scope></style>

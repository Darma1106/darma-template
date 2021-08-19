<template>
  <div class="h-screen flex justify-center items-center">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ props.msg }}</h1>
      <p>
        请添加插件:
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        ( 如果使用
        <code>&lt;script setup&gt;</code>)
      </p>

      <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
      </p>

      <a-button type="primary" @click="add">add : {{ count }}</a-button>
      <br />
      <a-button type="primary" class="mt-8 bg" :loading="loading" @click="asyncAdd">asyncAdd : {{ count }}</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { Button as AButton } from 'ant-design-vue'
import { useTemplateStore } from '@/store'

interface Props {
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  msg: '默认 message'
})

const { add, loading, asyncAdd, count } = toRefs(useTemplateStore())
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

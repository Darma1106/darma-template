import { defineStore } from 'pinia'

interface TemplateStore {
  count: number
  loading: boolean
}

export const useTemplateStore = defineStore({
  id: 'template',
  state(): TemplateStore {
    return {
      count: 0,
      loading: false
    }
  },
  actions: {
    add() {
      this.count++
    },
    async asyncAdd() {
      this.loading = true
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(1)
        }, 3000)
      })
      this.count += res
      this.loading = false
    }
  }
})

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Array<T> {
  clean: () => void
  delete: (index: number) => T
}

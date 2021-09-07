declare module '*.vue' {
  // eslint-disable-next-line import/named
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

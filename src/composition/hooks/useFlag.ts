import { ref } from 'vue'
import type { Ref } from 'vue'

interface FlagController {
  toggle: () => boolean
  set: (flag: boolean) => boolean
  reset: (flag?: boolean) => boolean
}

export default function useFlag(init: boolean): [Ref<boolean>, FlagController] {
  const current = ref(init)

  const toggle = (): boolean => {
    current.value = !current.value
    return current.value
  }
  const set = (flag: boolean): boolean => {
    current.value = flag
    return current.value
  }
  const reset = (flag?: boolean): boolean => {
    if (flag) init = flag
    current.value = init
    return current.value
  }

  return [current, { toggle, set, reset }]
}

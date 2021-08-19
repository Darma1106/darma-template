import { AxiosResponse } from 'axios'
import { removePending } from './pendingHandler'

export function responseResolve(response: AxiosResponse): Promise<any> {
  removePending(response) // 在请求结束后，移除本次请求
  return Promise.resolve(response.data)
}

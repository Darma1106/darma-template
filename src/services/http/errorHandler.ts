import { message } from 'ant-design-vue'

import type { AxiosError } from 'axios'

const codeMessage: {
  [key: number]: string
} = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: 'token失效',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '用户名、密码错误。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 异常拦截处理器
export const errorHandler = (error: AxiosError): Promise<never> => {
  const { response } = error

  if (response && response.status) {
    // 优先提示接口返回的错误
    const { status, data } = response
    const errorText = data.message || codeMessage[status] || response.statusText
    message.error(errorText)
  } else if (!response) {
    message.error('网络异常')
  }
  return Promise.reject(error)
}

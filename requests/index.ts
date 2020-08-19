import Axios, { AxiosError, AxiosRequestConfig } from 'axios'

const api = Axios.create({
  baseURL: 'https://mf-schema.appspot.com/api'
})

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const _config = {
      ...config,
      headers: {
        'x-acc-k': 'RjwAM3Jxj4ey9G5hwgrqFri3s'
      }
    }
    return _config
  },
  (err: AxiosError) => {
    const error = err.response
      ? err.response.data
        ? err.response.data
        : err.response || 'Internal error.'
      : 'Internal error.'
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (res: any) => {
    return res
  },
  (err: AxiosError) => {
    const error = err.response
      ? err.response.data
        ? err.response.data
        : err.response || 'Internal error.'
      : 'Internal error.'
    return Promise.reject(error)
  }
)

export { api }

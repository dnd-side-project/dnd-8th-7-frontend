import axios, { AxiosError } from 'axios'

import { API_URL } from '@/constants/urls'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { ACTION_TYPE } from '@/utils/react-native-webview-bridge/types/common.type'

const API = axios.create({
  baseURL: API_URL,
})

API.interceptors.request.use((config) => {
  if (process.env.NODE_ENV === 'development') {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_DEV_TOKEN}`
  }
  return config
})

API.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ code: string }>) => {
    if (
      error.response?.status === 401
      // TODO 서버 에러 데이터 수정되면 주석 해제
      // &&
      // error.response?.data &&
      // ['AT01', 'AT02', 'AT03'].includes(error.response.data.code)
    ) {
      rnWebViewBridge.sendAction(ACTION_TYPE.LOGOUT)
    }
    return Promise.reject(error)
  },
)

interface Tokens {
  accessToken: string
}
export const setTokenInAxiosInstance = ({ accessToken }: Tokens) => {
  API.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  })
}

export default API

import axios from 'axios'

import { API_URL } from '@/constants/urls'

const API = axios.create({
  baseURL: API_URL,
})

/** TODO interceptor 추가 */

export default API

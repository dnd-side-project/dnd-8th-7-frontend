import API from '@/api/axios'

import AuthService from './Auth.interface'
import * as Type from '@/api/types/auth.types'

export default class AuthAxiosAPI implements AuthService {
  login() {
    return API.get(`/api/login/google`)
  }

  loginCallback(params: Type.GoogleLoginCallbackParams) {
    return API.post<Type.GoogleLoginCallbackResponse>(
      `/api/login/callback/google?code=${params.code}`,
    )
  }
}

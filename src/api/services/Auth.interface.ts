import * as Type from '@/api/types/auth.types'
import { ServiceFunc } from './types'

export default interface AuthService {
  login: ServiceFunc

  loginCallback: ServiceFunc<
    Type.GoogleLoginCallbackParams,
    Type.GoogleLoginCallbackResponse
  >
}

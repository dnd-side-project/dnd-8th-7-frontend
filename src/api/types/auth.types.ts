export type GoogleLoginCallbackParams = {
  code: string
}
export type GoogleLoginCallbackResponse = {
  token: string
  isNewUser: boolean
}

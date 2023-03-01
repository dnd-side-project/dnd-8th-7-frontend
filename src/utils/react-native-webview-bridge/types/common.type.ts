/**
 * @description WebView -> RN 보낼 수 있는 메세지 종류
 */
export enum EMessageType {
  OPEN_BOTTOM_SHEET = 'OPEN_BOTTOM_SHEET',
  CLOSE_BOTTOM_SHEET = 'CLOSE_BOTTOM_SHEET',
  OPEN_NEW_WEBVIEW = 'OPEN_NEW_WEBVIEW',
  CLOSE_NEW_WEBVIEW = 'CLOSE_NEW_WEBVIEW',
  PICK_IMAGE_FROM_LIBRARY = 'PICK_IMAGE_FROM_LIBRARY',
  OPEN_EXTERNAL_BRWOSER = 'OPEN_EXTERNAL_BRWOSER',
  ACTION = 'ACTION',
}
export type MessageType = keyof typeof EMessageType
export type MessageData<T = Record<string | number, unknown>> = {
  eventKey: string
  contents?: T
}

export enum ACTION_TYPE {
  GO_MAIN = 'GO_MAIN',
  LOGOUT = 'LOGOUT',
}
export type ActionType = keyof typeof ACTION_TYPE

/**
 * @description RN -> WebView 받을 수 있는 메세지 종류
 */
export enum ECallbackMessageType {
  CALL_BACK = 'CALL_BACK',
}
export type CallbackMessageType = keyof typeof ECallbackMessageType
export type CallbackMessageData = {
  type: string
  eventKey?: string
  data?: CallbackDataType
}
export type CallbackDataType = {
  callbackKey: string
  parameters: any
}

export type Callbacks = {
  [key: string]: (parameter?: any) => any
}

/**
 * @description WebView -> RN 보낼 수 있는 메세지 종류
 */
export enum EMessageType {
  OPEN_BOTTOM_SHEET = 'OPEN_BOTTOM_SHEET',
  CLOSE_BOTTOM_SHEET = 'CLOSE_BOTTOM_SHEET',
}
export type MessageType = keyof typeof EMessageType
export type MessageData<T = Record<string | number, unknown>> = {
  eventKey: string
  contents?: T
}

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
  data?: any
}
export type CallbackDataType = {
  callbackKey: string
  parameters: any
}

export type Callbacks = {
  [key: string]: (parameters?: any) => any
}

export type Key = string

export type NewWebViewData = {
  key: Key
  url: string
}

export enum RN_EVENT_TYPE {
  CLOSE = 'CLOSE',
  OPENED = 'OPENED',
}
export type RNEventType = keyof typeof RN_EVENT_TYPE

/**
 * @description RN에 정의되어 있는 콜백 함수입니다.
 */
export type RNCallBacks = {
  onClose?: () => void
}

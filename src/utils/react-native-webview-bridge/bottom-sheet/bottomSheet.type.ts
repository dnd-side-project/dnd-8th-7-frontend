export enum EBottomSheetType {
  LIST = 'LIST',
  SELECT = 'SELECT',
  MULTI_SELECT = 'MULTI_SELECT',
  REACTION = 'REACTION',
  EMOJI = 'EMOJI',
}
export type BottomSheetType = keyof typeof EBottomSheetType
export type Key = string

export type DefaultElement = {
  key: Key
  title: string
  //   showSwitch?: boolean
  //   onSwitchChange?: (value: boolean) => void
}
export type ListBottomSheetContents = {
  title?: string
  items: Array<DefaultElement>
}

export enum RN_EVENT_TYPE {
  ITEM_CLICKED = 'ITEM_CLICKED',
  CLICKED = 'CLICKED',
  CLOSED = 'CLOSED',
  OPENED = 'OPENED',
}
export type RNEventType = keyof typeof RN_EVENT_TYPE

/**
 * @description RN에 정의되어 있는 콜백 함수입니다.
 */
export type RNCallBacks = {
  onItemClick?: (key: string) => void
  onClose?: () => void
}

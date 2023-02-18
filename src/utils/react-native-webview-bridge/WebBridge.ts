import {
  MessageType,
  MessageData,
  Callbacks,
  ECallbackMessageType,
  CallbackDataType,
  CallbackMessageData,
} from './types/common.type'

export default class WebBridge {
  /**
   * @member eventList <이벤트키, 이벤트 전달 받을 시 실행할 콜백 함수>
   */
  protected static eventList = new Map<string, Callbacks>()

  sendMessage(type: MessageType, data?: MessageData) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }))
  }

  webviewListener(event: any) {
    const { type, eventKey, data } = JSON.parse(
      event.data,
    ) as CallbackMessageData

    switch (type) {
      case ECallbackMessageType.CALL_BACK:
        if (eventKey && WebBridge.eventList.has(eventKey)) {
          const { callbackKey, parameters } = data as CallbackDataType
          const callbacks = WebBridge.eventList.get(eventKey)
          callbacks?.[callbackKey]?.(parameters)
        }
        break
    }
  }

  /**
   *
   * @param eventKey 이벤트를 식별할 키 입니다. 유일하지 않으면 가장 최신에 등록된 이벤트만 실행됩니다.
   * @param callbacks 이벤트가 발생했을 때 실행될 콜백 함수 입니다.
   */
  subscribe(eventKey: string, callbacks: Callbacks) {
    this.unsubscribe(eventKey)
    WebBridge.eventList.set(eventKey, callbacks)
  }

  unsubscribe(eventKey: string) {
    if (WebBridge.eventList.has(eventKey)) {
      WebBridge.eventList.delete(eventKey)
    }
  }

  /**
   * @description event Listener 등록입니다. 최초 한 번만 실행해주세요. 잊지 않고 `unmount()`도 실행을 함께 해주세요.
   */
  init() {
    if (window.ReactNativeWebView) {
      /** android */
      document.addEventListener('message', this.webviewListener)
      /** ios */
      window.addEventListener('message', this.webviewListener)
    }
  }

  /**
   * @description event Listener 삭제입니다.
   */
  unmount() {
    /** android */
    document.removeEventListener('message', this.webviewListener)
    /** ios */
    window.removeEventListener('message', this.webviewListener)
  }
}

import { NewWebViewData } from '@/utils/react-native-webview-bridge/new-webview/newWebView.type'
import { EMessageType, MessageData } from '../types/common.type'
import webBridge from '@/utils/react-native-webview-bridge'

function open(data: MessageData<NewWebViewData>) {
  if (window?.ReactNativeWebView) {
    webBridge.sendMessage(EMessageType.OPEN_NEW_WEBVIEW, data)
  }
}

function close(data: MessageData) {
  if (window?.ReactNativeWebView) {
    webBridge.sendMessage(EMessageType.CLOSE_NEW_WEBVIEW, data)
  }
}

function sendAction(action: string) {
  if (window?.ReactNativeWebView) {
    webBridge.sendAction(action)
  }
}

const RNNewWebView = {
  open,
  close,
  sendAction,
}
export default RNNewWebView

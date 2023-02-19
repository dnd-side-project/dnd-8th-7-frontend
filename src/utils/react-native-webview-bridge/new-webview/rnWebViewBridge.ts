import { RNCallBacks } from '@/utils/react-native-webview-bridge/types/newWebView.type'
import RNNewWebView from '@/utils/react-native-webview-bridge/new-webview'
import webBridge from '@/utils/react-native-webview-bridge'
import { NewWebViewData } from '../types/newWebView.type'

type Functions = {
  open: (data: NewWebViewData, callbacks?: RNCallBacks) => void
  close: () => void
}
type ReturnType = [Functions['open'], Functions['close']]

export default function rnWebViewBridge(key: string): ReturnType {
  const thisKey = `NEW_WEBVIEW_${key}`

  const open: Functions['open'] = (data, callbacks) => {
    if (callbacks) {
      webBridge.subscribe(thisKey, callbacks)
    }

    RNNewWebView.open({
      eventKey: thisKey,
      contents: data,
    })
  }

  const close: Functions['close'] = () => {
    RNNewWebView.close({ eventKey: thisKey })
  }

  return [open, close]
}

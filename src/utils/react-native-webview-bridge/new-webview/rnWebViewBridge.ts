import { RNCallBacks } from '@/utils/react-native-webview-bridge/new-webview/newWebView.type'
import RNNewWebView from '@/utils/react-native-webview-bridge/new-webview'
import webBridge from '@/utils/react-native-webview-bridge'
import { NewWebViewData } from './newWebView.type'

type ReturnType = {
  open: (data: NewWebViewData, callbacks?: RNCallBacks) => void
  close: () => void
  sendAction: (action: string) => void
}

function rnWebViewBridge(): ReturnType {
  const thisKey = `NEW_WEBVIEW`

  const open: ReturnType['open'] = (data, callbacks) => {
    if (callbacks) {
      webBridge.subscribe(thisKey, callbacks)
    }

    RNNewWebView.open({
      eventKey: thisKey,
      contents: data,
    })
  }

  const close: ReturnType['close'] = () => {
    RNNewWebView.close({ eventKey: thisKey })
  }

  const sendAction = (action: string) => {
    RNNewWebView.sendAction(action)
  }

  return { open, close, sendAction }
}

export default rnWebViewBridge()

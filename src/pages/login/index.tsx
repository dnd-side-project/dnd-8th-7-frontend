import { useEffect } from 'react'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { ACTION_TYPE } from '@/utils/react-native-webview-bridge/types/common.type'

export default function LoginPage() {
  useEffect(() => {
    rnWebViewBridge.sendAction(ACTION_TYPE.LOGOUT)
  }, [])
  return null
}

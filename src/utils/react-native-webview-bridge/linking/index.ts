import webBridge from '@/utils/react-native-webview-bridge'
import { EMessageType } from '../types/common.type'
import { LinkingData } from './linking.type'

type ReturnType = {
  open: (data: LinkingData) => void
}

function linkingBridgeFn(): ReturnType {
  const thisKey = `LINKING`

  const open: ReturnType['open'] = (data: LinkingData) => {
    webBridge.sendMessage(EMessageType.OPEN_EXTERNAL_BRWOSER, {
      eventKey: thisKey,
      contents: data,
    })
  }

  return { open }
}

const linkingBridge = linkingBridgeFn()

export default linkingBridge

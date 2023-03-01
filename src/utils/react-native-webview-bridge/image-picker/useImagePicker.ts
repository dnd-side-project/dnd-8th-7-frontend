import webBridge from '@/utils/react-native-webview-bridge'
import { EMessageType } from '@/utils/react-native-webview-bridge/types/common.type'
import { RNCallBacks } from '@/utils/react-native-webview-bridge/types/imagePicker.type'

type Functions = {
  open: (callbacks?: RNCallBacks) => void
}
type ReturnType = Functions['open']

export default function useRNImagePicker(key: string): ReturnType {
  const thisKey = `IMAGE_PICKER_${key}`

  const open: Functions['open'] = (callbacks) => {
    if (callbacks) {
      webBridge.subscribe(thisKey, callbacks)
    }

    webBridge.sendMessage(EMessageType.PICK_IMAGE_FROM_LIBRARY, {
      eventKey: thisKey,
    })
  }

  return open
}

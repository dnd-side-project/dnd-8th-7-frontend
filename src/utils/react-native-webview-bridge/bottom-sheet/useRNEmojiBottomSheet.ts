import {
  EBottomSheetType,
  RNCallBacks,
} from '@/utils/react-native-webview-bridge/types/bottomSheet.type'
import RNBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet'
import webBridge from '@/utils/react-native-webview-bridge'

type Functions = {
  open: (callbacks?: RNCallBacks) => void
  close: () => void
}
type ReturnType = [Functions['open'], Functions['close']]

export default function useRNEmojiBottomSheet(key: string): ReturnType {
  const thisKey = `BOTTOM_SHEET_${EBottomSheetType.EMOJI}_${key}`

  const open: Functions['open'] = (callbacks) => {
    if (callbacks) {
      webBridge.subscribe(thisKey, callbacks)
    }

    RNBottomSheet.open({
      eventKey: thisKey,
      contents: { type: EBottomSheetType.EMOJI },
    })
  }

  const close: Functions['close'] = () => {
    RNBottomSheet.close({ eventKey: thisKey })
  }

  return [open, close]
}

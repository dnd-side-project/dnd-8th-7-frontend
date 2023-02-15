import {
  EBottomSheetType,
  RNCallBacks,
  SelectBottomSheetContents,
} from '@/utils/react-native-webview-bridge/types/bottomSheet.type'
import RNBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet'
import webBridge from '@/utils/react-native-webview-bridge'

type Functions = {
  open: (data: SelectBottomSheetContents, callbacks?: RNCallBacks) => void
  close: () => void
}
type ReturnType = [Functions['open'], Functions['close']]

export default function useRNSelectBottomSheet(key: string): ReturnType {
  const thisKey = `BOTTOM_SHEET_${EBottomSheetType.SELECT}_${key}`

  const open: Functions['open'] = (data, callbacks) => {
    if (callbacks) {
      webBridge.subscribe(thisKey, callbacks)
    }

    RNBottomSheet.open({
      eventKey: thisKey,
      contents: { type: EBottomSheetType.SELECT, props: data },
    })
  }

  const close: Functions['close'] = () => {
    RNBottomSheet.close({ eventKey: thisKey })
  }

  return [open, close]
}

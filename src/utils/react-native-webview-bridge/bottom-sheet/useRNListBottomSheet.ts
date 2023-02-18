import {
  ListBottomSheetContents,
  EBottomSheetType,
  RNCallBacks,
} from '@/utils/react-native-webview-bridge/types/bottomSheet.type'
import RNBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet'
import webBridge from '@/utils/react-native-webview-bridge'

type Functions = {
  open: (data: ListBottomSheetContents, callbacks?: RNCallBacks) => void
  close: () => void
}
type ReturnType = [Functions['open'], Functions['close']]

export default function useRNListBottomSheet(key: string): ReturnType {
  const thisKey = `BOTTOM_SHEET_${EBottomSheetType.LIST}_${key}`

  const open: Functions['open'] = (data, callbacks) => {
    if (callbacks) {
      webBridge.subscribe(thisKey, callbacks)
    }

    RNBottomSheet.open<ListBottomSheetContents>({
      eventKey: thisKey,
      contents: { type: EBottomSheetType.LIST, props: data },
    })
  }

  const close: Functions['close'] = () => {
    RNBottomSheet.close({ eventKey: thisKey })
  }

  return [open, close]
}

import { BottomSheetType } from '@/utils/react-native-webview-bridge/bottom-sheet/bottomSheet.type'
import { EMessageType, MessageData } from '../types/common.type'
import webBridge from '@/utils/react-native-webview-bridge'

function open<T = unknown>(
  data: MessageData<{
    type: BottomSheetType
    props?: T
  }>,
) {
  if (window?.ReactNativeWebView) {
    webBridge.sendMessage(EMessageType.OPEN_BOTTOM_SHEET, data)
  }
}

function close(
  data: MessageData<{
    type: BottomSheetType
  }>,
) {
  if (window?.ReactNativeWebView) {
    webBridge.sendMessage(EMessageType.CLOSE_BOTTOM_SHEET, data)
  }
}

const RNBottomSheet = {
  open,
  close,
}
export default RNBottomSheet

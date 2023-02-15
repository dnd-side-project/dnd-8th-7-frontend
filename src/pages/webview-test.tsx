import webBridge from '@/utils/react-native-webview-bridge'
import useRNSelectBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNSelectBottomSheet'
import { useEffect, useState } from 'react'

/**
 * @description bridge를 사용하는 예시 페이지입니다.
 * @TODO 페이지 삭제
 */
export default function WebViewTestPage() {
  const [text, setText] = useState(['초기'])
  const [open, close] = useRNSelectBottomSheet('REST')

  const handleOpenBottomSheet = () => {
    open(
      {
        title: '휴식',
        items: [
          { key: 'edit', title: '수정하기' },
          { key: 'delete', title: '삭제하기' },
          {
            key: 'saveBlock',
            title: '블럭 저장하기',
          },
          { key: 'delay', title: '다른 날로 미루기' },
        ],
      },
      {
        onItemClick: (key: string) => {
          setText((arr) => [...arr, '아이템 클릭' + key])
          // close()
        },
        onClose: () => {
          setText((arr) => [...arr, '모달 닫힘'])
        },
      },
    )
  }

  const handleCloseBottomSheet = () => {
    close()
  }

  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return (
    <>
      <button onClick={handleOpenBottomSheet}>바텀 시트 열기</button>
      <button onClick={handleCloseBottomSheet}>바텀 시트 닫기</button>
      <div>
        {text.map((txt, idx) => (
          <div key={idx}>{txt}</div>
        ))}
      </div>
    </>
  )
}

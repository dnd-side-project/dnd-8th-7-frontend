import { useRef } from 'react'
import clsx from 'clsx'

import { colors } from '@/styles/theme'

import { BottomButtonLayout } from '@/components/Layout'
import Header from '@/components/Header'
import NoData from '@/components/NoData'
import CheckBox from '@/components/CheckBox'
import SavedBlock from './SavedBlock'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

export default function SavedBlockContainer() {
  const checkedBlock = useRef(new Set()).current
  /**
   * TODO 임시 length
   */
  const blocksLength = 0

  const handleCheckClick = (value: boolean, blockId: number) => {
    if (value) {
      checkedBlock.add(blockId)
    } else {
      if (checkedBlock.has(blockId)) {
        checkedBlock.delete(blockId)
      }
    }
  }

  const handleBack = () => {
    rnWebViewBridge.close()
  }

  return (
    <BottomButtonLayout showButton={!!blocksLength} buttonText="완료">
      <Header
        title="블럭 불러오기"
        leftButton="back"
        onLeftButtonClick={handleBack}
      />
      <div className={clsx('pt-[56px]', 'px-[20px]', 'pb-[20px]', 'h-full')}>
        {blocksLength ? (
          <div
            className={clsx(
              'flex',
              'flex-col',
              'pt-[30px]',
              'w-full',
              'gap-[8px]',
            )}
          >
            {Array.from({ length: blocksLength }).map((_, idx) => (
              <div
                key={idx}
                className={clsx('flex', 'gap-[14px]', 'w-full', 'items-center')}
              >
                <CheckBox
                  shape="rectangle"
                  onChange={(value) => handleCheckClick(value, idx)}
                />
                <SavedBlock
                  color={colors.red}
                  icon={'😂'}
                  blockTitle={'한둘셋넷일여아열한둘셋'}
                  sumOfTask={12}
                />
              </div>
            ))}
          </div>
        ) : (
          <NoBlocks />
        )}
      </div>
    </BottomButtonLayout>
  )
}

function NoBlocks() {
  return (
    <div className={clsx('flex', 'justify-center', 'items-center', 'h-full')}>
      <NoData
        text={`저장한 블럭이 없어요${'\n'}필요한 블럭을 저장해 불러와보세요!`}
      />
    </div>
  )
}

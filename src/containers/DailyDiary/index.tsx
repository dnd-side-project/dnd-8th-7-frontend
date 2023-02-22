import { useState } from 'react'
import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'
import Switch from '@/components/Switch'

const LABEL = 'text-lg font-bold text-black mt-[40px] mb-[10px]'
const SUB_TITLE = 'text-lg tracking-[-0.006em] text-black mb-[6px]'
const DESCRIPTION = 'text-sm tracking-[-0.004em] text-textGray-100'

export default function DailyDiaryContainer() {
  const [isSecret, setIsSecret] = useState(false)

  const handleSubmit = () => {
    console.log('TODO 하루 일기 submit')
  }

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSecretChange = (value: boolean) => {
    setIsSecret(value)
  }

  return (
    <BottomButtonLayout
      buttonText="완료"
      buttonProps={{ onClick: handleSubmit }}
    >
      <Header
        title={'하루 일기'}
        leftButton={'back'}
        onLeftButtonClick={handleGoBack}
      />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <div className={LABEL}>오늘의 감정</div>
        <div className={LABEL}>하루 일기</div>
        <textarea className={clsx('bg-gray-50')} />
        <div className={LABEL}>추가 설정</div>
        <div className={clsx('flex', 'justify-between')}>
          <div>
            <div className={clsx(SUB_TITLE)}>쉿! 비밀로 하기</div>
            <div className={clsx(DESCRIPTION)}>친구들에게 보이지 않아요</div>
          </div>
          <Switch onChange={handleSecretChange} />
        </div>
      </div>
    </BottomButtonLayout>
  )
}

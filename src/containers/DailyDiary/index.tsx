import { ChangeEvent, useEffect, useState } from 'react'
import clsx from 'clsx'

import webBridge from '@/utils/react-native-webview-bridge'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import useRNEmojiBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNEmojiBottomSheet'

import { BottomButtonLayout } from '@/components/Layout'
import Header from '@/components/Header'
import Switch from '@/components/Switch'
import { FaceIcon } from '@/components/Icons'
import DiaryTextArea from './DiaryTextArea'
import ProfileHeader from './ProfileHeader'

const LABEL_STYLE = 'text-lg font-bold text-black mt-[40px] mb-[10px]'
const SUB_TITLE_STYLE = 'text-lg tracking-[-0.006em] text-black mb-[6px]'
const DESCRIPTION_STYLE = 'text-sm tracking-[-0.004em] text-textGray-100'

const DIARY_MAX_LENGTH = 100

export default function DailyDiaryContainer() {
  const [emoji, setEmoji] = useState<string>()
  const [diaryTextLength, setDiaryTextLength] = useState(0)
  const [isSecret, setIsSecret] = useState(false)

  const [open, close] = useRNEmojiBottomSheet('newBlock')

  const handleSubmit = () => {
    console.log('TODO 하루 일기 submit')
  }

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSecretChange = (value: boolean) => {
    setIsSecret(value)
  }

  const handleDiaryChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryTextLength(Math.min(e.target.value?.length || 0, DIARY_MAX_LENGTH))
  }

  const handleEmojiClick = () => {
    open({
      onItemClick: (key) => {
        setEmoji(key)
        close()
      },
    })
  }

  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return (
    <BottomButtonLayout
      buttonText="완료"
      buttonProps={{
        onClick: handleSubmit,
        disabled: !emoji || !diaryTextLength,
      }}
    >
      <Header
        title={'하루 일기'}
        leftButton={'back'}
        onLeftButtonClick={handleGoBack}
      />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <ProfileHeader
          numOfBlocks={0}
          numOfTasks={0}
          numOfdoneTasks={0}
          date={'2023-01-24'}
        />
        <div className={clsx(LABEL_STYLE, 'mt-[36px]')}>오늘의 감정</div>
        <button
          onClick={handleEmojiClick}
          className={clsx(
            'bg-gray-50',
            'w-[70px]',
            'h-[70px]',
            'flex',
            'items-center',
            'justify-center',
            'rounded-lg',
          )}
        >
          {emoji || <FaceIcon className="fill-gray-400" />}
        </button>
        <div className={clsx('flex', 'justify-between', LABEL_STYLE)}>
          <div>하루 일기</div>
          <div
            className={clsx(
              'text-[14px]',
              'leading-[140%]',
              'text-textGray-50',
              'font-[500]',
            )}
          >
            {diaryTextLength}/{DIARY_MAX_LENGTH}
          </div>
        </div>
        <DiaryTextArea
          onChange={handleDiaryChange}
          maxLength={DIARY_MAX_LENGTH}
        />
        <div className={LABEL_STYLE}>추가 설정</div>
        <div className={clsx('flex', 'justify-between')}>
          <div>
            <div className={clsx(SUB_TITLE_STYLE)}>쉿! 비밀로 하기</div>
            <div className={clsx(DESCRIPTION_STYLE)}>
              친구들에게 보이지 않아요
            </div>
          </div>
          <Switch onChange={handleSecretChange} />
        </div>
      </div>
    </BottomButtonLayout>
  )
}

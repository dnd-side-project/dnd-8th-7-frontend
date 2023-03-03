import { useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { colors } from '@/styles/theme'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import { dayBlockAPI } from '@/api'
import useHttpRequest from '@/hooks/useHttpRequest'
import { CreateBlockParams } from '@/api/types/base.types'

import { BottomButtonLayout } from '@/components/Layout'
import ColorPicker from '@/components/ColorPicker'
import Switch from '@/components/Switch'
import Header from '@/components/Header'
import LoadingContainer from '@/components/Loading/Container'
import BlockTitleInput from './BlockTitleInput'

const TITLE =
  'text-lg font-bold tracking-[-0.004em] text-black mt-[30px] mb-[12px]'
const SUB_TITLE = 'text-lg tracking-[-0.006em] text-black mb-[6px]'
const DESCRIPTION = 'text-sm tracking-[-0.004em] text-textGray-100'

const DEFAULT_COLORS = [
  colors?.red,
  colors?.pink,
  colors?.orange,
  colors?.skyblue,
  colors?.blue,
  colors?.purple,
]

export default function NewBlockContainer() {
  const {
    query: { date },
  } = useRouter()
  const dateValue = date?.toString()
  const [blockTitle, setBlockTitle] = useState<string>('')
  const [emoji, setEmoticon] = useState<string>()
  const [backgroundColor, setBlockColor] = useState<string>(colors?.red)
  const [isSecret, setIsSecret] = useState(false)

  const [, createBlock, isCreateLoading] = useHttpRequest(
    (params: CreateBlockParams) =>
      dayBlockAPI.createBlock(params).then(({ data }) => data),
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlockTitle(e.target.value)
  }

  const handleEmojiChange = (emoji: string) => {
    setEmoticon(emoji)
  }

  const handleColorChange = (backgroundColor: string) => {
    setBlockColor(backgroundColor)
  }

  const handleSecretChange = (value: boolean) => {
    setIsSecret(value)
  }

  const handleClose = () => {
    rnWebViewBridge.close()
  }

  const handleSubmit = () => {
    if (!dateValue || !emoji || !backgroundColor) {
      console.log('입력 에러') // TODO: 에러 처리
      return
    }
    createBlock(
      {
        date: dateValue,
        title: blockTitle,
        emoji,
        backgroundColor,
        isSecret,
      },
      {
        onSuccess: () => {
          rnWebViewBridge.close()
        },
        onError: () => console.log('error'), // TODO: 에러 처리
      },
    )
  }

  return (
    <>
      <LoadingContainer loading={isCreateLoading} />
      <BottomButtonLayout
        buttonText="완료"
        buttonProps={{
          type: 'submit',
          onClick: handleSubmit,
          disabled: !(blockTitle && emoji && backgroundColor),
        }}
      >
        <Header
          title={'새 블럭 만들기'}
          rightButton={'exit'}
          onRightButtonClick={handleClose}
        />
        <div className={clsx('pt-[56px]', 'px-[20px]')}>
          <div className={clsx(TITLE, 'mt-[24px]')}>블럭 제목</div>
          <BlockTitleInput
            value={blockTitle}
            onChange={handleInputChange}
            showLimitCount
            maxLength={15}
            placeholder="블럭 제목을 입력해주세요"
            onEmojiChange={handleEmojiChange}
          />
          <div className={clsx(TITLE, 'mb-[16px]')}>블럭 색상</div>
          <ColorPicker
            defaultColors={DEFAULT_COLORS}
            onChange={handleColorChange}
            defaultPicked={colors?.red}
          />
          <div className={clsx(TITLE, 'mb-[16px]')}>추가 설정</div>
          <div className={clsx('flex', 'justify-between')}>
            <div>
              <div className={clsx(SUB_TITLE)}>쉿! 비밀로 하기</div>
              <div className={clsx(DESCRIPTION)}>친구들에게 보이지 않아요</div>
            </div>
            <Switch onChange={handleSecretChange} />
          </div>
        </div>
      </BottomButtonLayout>
    </>
  )
}

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { dayBlockAPI } from '@/api'

import { colors } from '@/styles/theme'

import ColorPicker from '@/components/ColorPicker'
import Switch from '@/components/Switch'
import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'
import BlockTitleInput from '../NewBlock/BlockTitleInput'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import useHttpRequest from '@/hooks/useHttpRequest'

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

export default function UpdateBlockContainer() {
  const {
    query: { blockId },
  } = useRouter()
  const blockIdNumber = Number(blockId?.toString())
  const [blockTitle, setBlockTitle] = useState<string>()
  const [emoji, setEmoticon] = useState<string>()
  const [backgroundColor, setBlockColor] = useState<string>()
  const [isSecret, setIsSecret] = useState<boolean>()
  const [blockDetail, fetchBlockDetail, isLoading] = useHttpRequest(() =>
    dayBlockAPI
      .getSingleBlock({ blockId: blockIdNumber })
      .then(({ data }) => data),
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
    if (!blockDetail) return
    dayBlockAPI
      .updateBlock({
        blockId: blockIdNumber,
        title: blockTitle ?? blockDetail?.title,
        emoji: emoji ?? blockDetail?.emoji,
        backgroundColor: backgroundColor ?? blockDetail?.backgroundColor,
        isSecret: isSecret ?? blockDetail?.isSecret,
      })
      .then(() => rnWebViewBridge.close())
      .catch(() => console.log('error'))
  }

  useEffect(() => {
    fetchBlockDetail()
  }, [])

  if (!blockDetail) return null

  return (
    <BottomButtonLayout
      buttonText="완료"
      buttonProps={{ type: 'submit', onClick: handleSubmit }}
    >
      <Header
        title={blockDetail.title}
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
          defaultEmoji={blockDetail.emoji}
          defaultValue={blockDetail.title}
        />
        <div className={clsx(TITLE, 'mb-[16px]')}>블럭 색상</div>
        <ColorPicker
          defaultColors={DEFAULT_COLORS}
          onChange={handleColorChange}
          defaultPicked={blockDetail.backgroundColor}
        />
        <div className={clsx(TITLE, 'mb-[16px]')}>추가 설정</div>
        <div className={clsx('flex', 'justify-between')}>
          <div>
            <div className={clsx(SUB_TITLE)}>쉿! 비밀로 하기</div>
            <div className={clsx(DESCRIPTION)}>친구들에게 보이지 않아요</div>
          </div>
          <Switch
            onChange={handleSecretChange}
            defaultChecked={blockDetail.isSecret}
          />
        </div>
      </div>
    </BottomButtonLayout>
  )
}

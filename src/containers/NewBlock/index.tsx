import { useState } from 'react'
import clsx from 'clsx'

import { colors } from '@/styles/theme'

import BlockTitleInput from './BlockTitleInput'
import ColorPicker from '@/components/ColorPicker'
import Switch from '@/components/Switch'
import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'

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
  const [emoji, setEmoji] = useState<string>()
  const [color, setColor] = useState<string>()
  const [isSecret, setIsSecret] = useState(false)

  const handleEmojiChange = (emoji: string) => {
    setEmoji(emoji)
  }

  const handleColorChange = (color: string) => {
    setColor(color)
  }

  const handleSecretChange = (value: boolean) => {
    setIsSecret(value)
  }

  const handleClose = () => {
    console.log('closed')
  }

  return (
    <BottomButtonLayout buttonText="완료">
      <Header
        title={'새 블럭 만들기'}
        rightButton={'exit'}
        onRightButtonClick={handleClose}
      />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <div className={clsx(TITLE, 'mt-[24px]')}>블럭 제목</div>
        <BlockTitleInput
          showLimitCount
          maxLength={15}
          placeholder="블럭 제목을 입력해주세요"
          onEmojiChange={handleEmojiChange}
          maxLength={15}
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
  )
}

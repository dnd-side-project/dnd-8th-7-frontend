import { PropsWithoutRef } from 'react'
import clsx from 'clsx'

import Profile from '@/components/Profile'
import Switch, { Props as SwitchProps } from '@/components/Switch'
import Input, { InputProps } from '@/components/Input'

const LABEL = 'text-lg font-bold text-black mt-[40px] mb-[10px]'

interface Props {
  onProfileImageChnage?: (file: File) => void
  nickNameProps?: PropsWithoutRef<InputProps>
  descriptionPrps?: PropsWithoutRef<InputProps>
  publicNickNameProps?: SwitchProps
}

export default function ProfileForm({
  onProfileImageChnage,
  nickNameProps,
  descriptionPrps,
  publicNickNameProps,
}: Props) {
  return (
    <>
      <div className={clsx('flex', 'flex-col', 'items-center', 'mt-[20px]')}>
        <Profile size="md" />
      </div>
      <div className={LABEL}>닉네임</div>
      <Input
        {...nickNameProps}
        showLimitCount
        maxLength={6}
        placeholder="한글 6자 이내/특수문자 입력 불가"
      />
      <div className={LABEL}>한 줄 소개</div>
      <Input
        {...descriptionPrps}
        showLimitCount
        maxLength={28}
        placeholder="간단한 한 줄 소개를 입력해 보세요"
      />
      <div
        className={clsx('flex', 'items-center', 'justify-between', 'mt-[40px]')}
      >
        <div className={clsx(LABEL, 'mt-0')}>닉네임 검색 허용</div>
        <Switch {...publicNickNameProps} />
      </div>
    </>
  )
}

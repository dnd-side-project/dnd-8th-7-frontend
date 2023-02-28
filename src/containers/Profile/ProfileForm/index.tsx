import { PropsWithoutRef, useEffect, useState } from 'react'
import clsx from 'clsx'

import ProfilePlusSvg from 'public/assets/svgs/profile_plus.svg'

import Profile from '@/components/Profile'
import Switch, { Props as SwitchProps } from '@/components/Switch'
import Input, { InputProps } from '@/components/Input'
import useRNImagePicker from '@/utils/react-native-webview-bridge/image-picker/useImagePicker'
import webBridge from '@/utils/react-native-webview-bridge'

const LABEL = 'text-lg font-bold text-black mt-[40px] mb-[10px]'

interface Props {
  onProfileImageChange?: (imageUrl: string) => void
  nickNameProps?: PropsWithoutRef<InputProps>
  descriptionPrps?: PropsWithoutRef<InputProps>
  publicNickNameProps?: SwitchProps
}

export default function ProfileForm({
  onProfileImageChange,
  nickNameProps,
  descriptionPrps,
  publicNickNameProps,
}: Props) {
  const openImagePicker = useRNImagePicker('profile')

  const [imageUrl, setImageUrl] = useState<string>()

  const handleProfileImageChangeClick = () => {
    openImagePicker({
      onImagePick: (data) => {
        setImageUrl(data)
        onProfileImageChange?.(data)
      },
    })
  }

  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  // TODO 특수문자 입력 방지

  return (
    <>
      <div className={clsx('flex', 'flex-col', 'items-center', 'mt-[20px]')}>
        <span
          onClick={handleProfileImageChangeClick}
          className={clsx('relative', 'w-[100px]', 'h-[100px]')}
        >
          {imageUrl ? (
            <div
              className={clsx(
                'rounded-full',
                'overflow-hidden',
                'w-[100px]',
                'h-[100px]',
              )}
            >
              <img
                alt="프로필 이미지"
                src={imageUrl}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <Profile size="md" />
          )}
          <div
            className={clsx(
              'absolute',
              'bottom-0',
              'right-0',
              'w-[28px]',
              'h-[28px]',
            )}
          >
            <ProfilePlusSvg />
          </div>
        </span>
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

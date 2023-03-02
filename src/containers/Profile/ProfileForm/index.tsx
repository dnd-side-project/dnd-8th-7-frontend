import { ChangeEvent, useState } from 'react'
import clsx from 'clsx'

import ProfilePlusSvg from 'public/assets/svgs/profile_plus.svg'

import useRNImagePicker from '@/utils/react-native-webview-bridge/image-picker/useImagePicker'
import { DEFAULT_PROFILE_IMAGE_URL } from '@/constants/urls'

import { UserProfile } from '@/types/common.type'

import Profile from '@/components/Profile'
import Switch from '@/components/Switch'
import Input from '@/components/Input'

const LABEL = 'text-lg font-bold text-black mt-[40px] mb-[10px]'

interface Props {
  defaultValue?: UserProfile
  onFormChange?: (values: UserProfile) => void
}

export default function ProfileForm({ onFormChange, defaultValue }: Props) {
  const openImagePicker = useRNImagePicker('profile')

  const [profileImageUrl, setImageUrl] = useState(
    defaultValue?.imgPath || DEFAULT_PROFILE_IMAGE_URL,
  )
  const [nickname, setNickname] = useState(defaultValue?.user || '')
  const [introduction, setIntroduction] = useState(
    defaultValue?.introduction || '',
  )
  const [isSecret, setIsSecret] = useState(defaultValue?.lock || false)

  const handleProfileImageChangeClick = () => {
    openImagePicker({
      onImagePick: (data) => {
        setImageUrl(data)
        handleValueChange({ imgPath: data })
      },
    })
  }

  const handleNickNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNickname(target.value)
    handleValueChange({ user: target.value })
  }
  const handleDescritionChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setIntroduction(target.value)
    handleValueChange({ introduction: target.value })
  }
  const handlePublicNickNameChange = (value: boolean) => {
    setIsSecret(value)
    handleValueChange({ lock: value })
  }

  const handleValueChange = (value: Partial<UserProfile>) => {
    onFormChange?.({
      imgPath: profileImageUrl,
      user: nickname,
      introduction: introduction,
      lock: isSecret,
      ...value,
    })
  }

  return (
    <>
      <div className={clsx('flex', 'flex-col', 'items-center', 'mt-[20px]')}>
        <span
          onClick={handleProfileImageChangeClick}
          className={clsx('relative', 'w-[100px]', 'h-[100px]')}
        >
          <Profile size="md" imgSrc={profileImageUrl} />
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
        onChange={handleNickNameChange}
        showLimitCount
        maxLength={6}
        placeholder="한글 6자 이내/특수문자 입력 불가"
        defaultValue={defaultValue?.user}
      />
      <div className={LABEL}>한 줄 소개</div>
      <Input
        onChange={handleDescritionChange}
        showLimitCount
        maxLength={28}
        placeholder="간단한 한 줄 소개를 입력해 보세요"
        defaultValue={defaultValue?.introduction}
      />
      <div
        className={clsx('flex', 'items-center', 'justify-between', 'mt-[40px]')}
      >
        <div className={clsx(LABEL, 'mt-0')}>닉네임 검색 허용</div>
        <Switch
          onChange={handlePublicNickNameChange}
          defaultChecked={defaultValue?.lock}
        />
      </div>
    </>
  )
}

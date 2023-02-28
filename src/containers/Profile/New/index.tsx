import { ChangeEvent, useState } from 'react'
import clsx from 'clsx'

import useHttpRequest from '@/hooks/useHttpRequest'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { dayBlockAPI } from '@/api'
import { UpdateMyProfileParams } from '@/api/types/base.types'

import ProfileForm from '@/containers/Profile/ProfileForm'
import Header from '@/components/Header'
import BottomButtonLayout from '@/components/Layout/BottomButton'
import { BASE_URL } from '@/constants/urls'
import { PATH } from '@/constants/path'

export default function NewProfileContainer() {
  const [, updateProfile, isUpdateLoading] = useHttpRequest(
    (params: UpdateMyProfileParams) =>
      dayBlockAPI.updateMyProfile(params).then(({ data }) => data),
  )

  const [profileImage, setProfileImage] = useState('')
  const [nickname, setNickname] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [isSecret, setIsSecret] = useState(false)

  const handleProfileImageChange = (url: string) => {
    setProfileImage(url)
  }

  const handleNickNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNickname(target.value)
  }
  const handleDescritionChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setIntroduction(target.value)
  }
  const handlePublicNickNameChange = (value: boolean) => {
    setIsSecret(value)
  }
  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSubmit = () => {
    updateProfile(
      {
        imgPath: profileImage,
        user: nickname,
        introduction: introduction,
        lock: isSecret,
      },
      {
        onSuccess: () => {
          rnWebViewBridge.open({
            key: 'newProfileDone',
            url: BASE_URL + PATH.newProfileDone,
            reset: true,
          })
        },
        onError: () => {
          // TODO 에러 메세지 전달
        },
      },
    )
  }

  return (
    <BottomButtonLayout
      buttonText="완료"
      buttonProps={{
        onClick: handleSubmit,
        disabled:
          isUpdateLoading || !(profileImage && nickname && introduction),
      }}
    >
      <Header title={''} leftButton={'back'} onLeftButtonClick={handleGoBack} />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <div
          className={clsx(
            'text-3xl',
            'text-center',
            'font-bold',
            'text-black',
            'mb-[34px]',
          )}
        >
          가입을 축하드려요!
          <br />
          프로필을 등록해보세요
        </div>
        <ProfileForm
          nickNameProps={{ onChange: handleNickNameChange }}
          descriptionPrps={{ onChange: handleDescritionChange }}
          publicNickNameProps={{
            onChange: handlePublicNickNameChange,
            defaultValue: false,
          }}
          onProfileImageChange={handleProfileImageChange}
        />
      </div>
    </BottomButtonLayout>
  )
}

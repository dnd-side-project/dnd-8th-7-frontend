import { useState } from 'react'
import clsx from 'clsx'

import useHttpRequest from '@/hooks/useHttpRequest'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import { dayBlockAPI } from '@/api'

import { UpdateMyProfileParams } from '@/api/types/base.types'
import { UserProfile } from '@/types/common.type'

import { BASE_URL } from '@/constants/urls'
import { PATH } from '@/constants/path'

import ProfileForm from '@/containers/Profile/ProfileForm'
import Header from '@/components/Header'
import BottomButtonLayout from '@/components/Layout/BottomButton'
import LoadingContainer from '@/components/Loading/Container'

export default function NewProfileContainer() {
  const [, updateProfile, isUpdateLoading] = useHttpRequest(
    (params: UpdateMyProfileParams) =>
      dayBlockAPI.updateMyProfile(params).then(({ data }) => data),
  )

  const [value, setValue] = useState<UserProfile>()
  const [isValid, setValid] = useState(false)
  const isFilled = !!value?.imgUrl && !!value?.nickname && !!value?.introduction

  const handleValueChange = (forms: UserProfile) => {
    setValue(forms)
  }

  const handleSubmit = () => {
    if (!isValid || !isFilled) return

    updateProfile(value, {
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
    })
  }

  const handleValidationChange = (validation: boolean) => {
    setValid(validation)
  }

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  return (
    <>
      <LoadingContainer loading={isUpdateLoading} />
      <BottomButtonLayout
        buttonText="완료"
        buttonProps={{
          onClick: handleSubmit,
          disabled: isUpdateLoading || !isValid || !isFilled,
        }}
      >
        <Header
          title={''}
          leftButton={'back'}
          onLeftButtonClick={handleGoBack}
        />
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
            onFormChange={handleValueChange}
            onValidationChange={handleValidationChange}
          />
        </div>
      </BottomButtonLayout>
    </>
  )
}

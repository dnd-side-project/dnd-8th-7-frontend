import { useEffect, useState } from 'react'
import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import useHttpRequest from '@/hooks/useHttpRequest'
import { dayBlockAPI } from '@/api'

import { BASE_URL } from '@/constants/urls'
import { PATH } from '@/constants/path'

import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'
import ProfileForm from '@/containers/Profile/ProfileForm'
import { UserProfile } from '@/types/common.type'
import { UpdateMyProfileParams } from '@/api/types/base.types'

export default function EditProfileContainer() {
  const [isEdited, setIsEdited] = useState(false)
  const [value, setValue] = useState<UserProfile>()

  const [myProfile, fetchMyProfile, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )
  const [, updateProfile, isUpdateLoading] = useHttpRequest(
    (params: UpdateMyProfileParams) =>
      dayBlockAPI.updateMyProfile(params).then(({ data }) => data),
  )

  const isValid = !!value?.imgPath && !!value?.user && !!value?.introduction

  const handleValueChange = (forms: UserProfile) => {
    setValue(forms)
    setIsEdited(true)
  }

  const handleBack = () => {
    rnWebViewBridge.close()
  }

  const handleMore = () => {
    rnWebViewBridge.open({
      key: 'profileMore',
      url: BASE_URL + PATH.myProfileSettings,
    })
  }

  const handleSubmit = () => {
    if (!isValid) return

    updateProfile(value)
  }

  useEffect(() => {
    fetchMyProfile(undefined, {
      onSuccess: (res) => {
        setValue(res)
      },
    })
  }, [])

  if (isLoading) return null
  if (!myProfile) return null

  return (
    <BottomButtonLayout
      buttonText="수정하기"
      buttonProps={{
        disabled: !isEdited || !isValid || isUpdateLoading,
        onClick: handleSubmit,
      }}
    >
      <Header
        title="프로필 편집"
        leftButton="back"
        onLeftButtonClick={handleBack}
        rightButton="more"
        onRightButtonClick={handleMore}
      />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <ProfileForm
          onFormChange={handleValueChange}
          defaultValue={myProfile}
        />
      </div>
    </BottomButtonLayout>
  )
}

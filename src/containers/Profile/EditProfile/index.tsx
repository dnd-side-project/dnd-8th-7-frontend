import { useEffect, useState } from 'react'
import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import useHttpRequest from '@/hooks/useHttpRequest'
import { dayBlockAPI } from '@/api'

import { UpdateMyProfileParams } from '@/api/types/base.types'
import { UserProfile } from '@/types/common.type'

import { BASE_URL } from '@/constants/urls'
import { PATH } from '@/constants/path'

import ProfileForm from '@/containers/Profile/ProfileForm'
import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'
import LoadingContainer from '@/components/Loading/Container'

export default function EditProfileContainer() {
  const [isEdited, setIsEdited] = useState(false)
  const [value, setValue] = useState<UserProfile>()

  const [myProfile, getMyProfile, , , isFetch] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )
  const [, updateProfile, isUpdateLoading] = useHttpRequest(
    (params: UpdateMyProfileParams) =>
      dayBlockAPI.updateMyProfile(params).then(({ data }) => data),
  )

  const isValid = !!value?.imgUrl && !!value?.nickname && !!value?.introduction

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

  const fetchMyProfile = () => {
    getMyProfile(undefined, {
      onSuccess: (res) => {
        setValue(res)
      },
    })
  }

  const handleSubmit = () => {
    if (!isValid) return

    updateProfile(value, {
      onSuccess: () => {
        fetchMyProfile()
        setIsEdited(false)
        rnWebViewBridge.close()
      },
      onError: () => {
        // TODO 에러 처리
      },
    })
  }

  useEffect(() => {
    fetchMyProfile()
  }, [])

  return (
    <LoadingContainer loading={!isFetch}>
      <LoadingContainer loading={isUpdateLoading} backgroundMask />
      <BottomButtonLayout
        buttonText="수정하기"
        buttonProps={{
          disabled: isUpdateLoading || !isValid || !isEdited,
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
        <div className={clsx('min-h-[calc(100vh-90px)]')}>
          <div className={clsx('pt-[56px]', 'px-[20px]')}>
            <ProfileForm
              onFormChange={handleValueChange}
              defaultValue={myProfile}
            />
          </div>
        </div>
      </BottomButtonLayout>
    </LoadingContainer>
  )
}

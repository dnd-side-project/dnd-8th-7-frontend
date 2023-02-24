import { useState } from 'react'
import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import { BASE_URL } from '@/constants/urls'
import { PATH } from '@/constants/path'

import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'
import ProfileForm from '@/containers/Profile/ProfileForm'

export default function EditProfileContainer() {
  const [isEdited, setIsEdited] = useState(false)

  const handleBack = () => {
    rnWebViewBridge.close()
  }

  const handleMore = () => {
    rnWebViewBridge.open({
      key: 'profileMore',
      url: BASE_URL + PATH.myProfileSettings,
    })
  }

  return (
    <BottomButtonLayout showButton={isEdited} buttonText="완료">
      <Header
        title="프로필 편집"
        leftButton="back"
        onLeftButtonClick={handleBack}
        rightButton="more"
        onRightButtonClick={handleMore}
      />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <ProfileForm />
      </div>
    </BottomButtonLayout>
  )
}

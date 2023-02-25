import { useRouter } from 'next/router'
import clsx from 'clsx'

import { PATH } from '@/constants/path'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import Header from '@/components/Header'
import BottomButtonLayout from '@/components/Layout/BottomButton'
import ProfileForm from '@/containers/Profile/ProfileForm'

export default function NewProfileContainer() {
  const router = useRouter()

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSubmit = () => {
    router.push(PATH.newProfileDone)
  }

  return (
    <BottomButtonLayout
      buttonText="완료"
      buttonProps={{ onClick: handleSubmit }}
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
        <ProfileForm />
      </div>
    </BottomButtonLayout>
  )
}

import { useRouter } from 'next/router'
import clsx from 'clsx'

import Header from '@/components/Header'
import BottomButtonLayout from '@/components/Layout/BottomButton'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import Profile from '@/components/Profile'
import Switch from '@/components/Switch'
import Input from '@/components/Input'

const LABEL = 'text-lg font-bold text-black mt-[40px] mb-[10px]'

export default function NewProfileContainer() {
  const router = useRouter()

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSubmit = () => {
    router.push('/profiles/new/done')
  }

  return (
    <BottomButtonLayout
      buttonText="완료"
      buttonProps={{ onClick: handleSubmit }}
    >
      <Header title={''} leftButton={'back'} onLeftButtonClick={handleGoBack} />
      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <div className={clsx('flex', 'flex-col', 'items-center')}>
          <div
            className={clsx(
              'text-3xl',
              'text-center',
              'font-bold',
              'text-black',
              'mt-[20px]',
              'mb-[24px]',
            )}
          >
            가입을 축하드려요!
            <br />
            프로필을 등록해보세요
          </div>
          <Profile size="md" />
        </div>
        <div className={LABEL}>닉네임</div>
        <Input
          showLimitCount
          maxLength={6}
          placeholder="한글 6자 이내/특수문자 입력 불가"
        />
        <div className={LABEL}>한 줄 소개</div>
        <Input
          showLimitCount
          maxLength={28}
          placeholder="간단한 한 줄 소개를 입력해 보세요"
        />
        <div
          className={clsx(
            'flex',
            'items-center',
            'justify-between',
            'mt-[40px]',
          )}
        >
          <div className={clsx(LABEL, 'mt-0')}>닉네임 검색 허용</div>
          <Switch />
        </div>
      </div>
    </BottomButtonLayout>
  )
}

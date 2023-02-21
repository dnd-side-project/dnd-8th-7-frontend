import { useRouter } from 'next/router'
import clsx from 'clsx'

import Header from '@/components/Header'
import BottomButtonLayout from '@/components/Layout/BottomButton'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import CheckBoxList from './CheckBoxList'

const TEXT_STYLE = 'text-[14px] leading-[140%]'

export default function NewProfileAgreementsContainer() {
  const router = useRouter()

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSubmit = () => {
    router.push('/profiles/new/done')
  }

  const handleTotalCheckChange = (checked: boolean) => {
    console.log(checked)
  }

  return (
    <BottomButtonLayout
      buttonText="다음"
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
            'mt-[20px]',
            'mb-[48px]',
          )}
        >
          서비스 이용을 위한
          <br />
          동의가 필요해요
        </div>

        <CheckBoxList
          values={[
            { title: '[필수] 만 14세 이상' },
            { title: '[필수] 이용약관 동의' },
            { title: '[필수] 개인정보 처리 방침 동의' },
          ]}
          onTotalCheckChange={handleTotalCheckChange}
        />

        <div className={clsx('flex', 'justify-center', 'mt-[98px]')}>
          <div
            className={clsx(
              'flex',
              'text-textGray-50',
              'items-center',
              TEXT_STYLE,
            )}
          >
            <a>이용약관</a>
            <div
              className={clsx(
                'w-[1px]',
                'h-[12px]',
                'bg-textGray-50',
                'mx-[12px]',
              )}
            />
            <a>개인정보 처리 방침</a>
          </div>
        </div>
      </div>
    </BottomButtonLayout>
  )
}

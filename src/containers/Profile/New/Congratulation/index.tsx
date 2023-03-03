import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import lottie from 'lottie-web'

import DarkProfileIcon from 'public/assets/icons/dark_profile.svg'

import useHttpRequest from '@/hooks/useHttpRequest'
import { dayBlockAPI } from '@/api'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { ACTION_TYPE } from '@/utils/react-native-webview-bridge/types/common.type'

import Button from '@/components/Button'
import PercentageProfile from '@/components/PercentageProfile'
import LoadingContainer from '@/components/Loading/Container'

export default function NewProfileCongratulationContainer() {
  const mount = useRef(false)
  const lottieRef = useRef<HTMLDivElement>(null)

  const [myProfile, fetchMyProfile, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )

  const handleGoMain = () => {
    rnWebViewBridge.sendAction(ACTION_TYPE.GO_MAIN)
  }

  useEffect(() => {
    fetchMyProfile()
  }, [])

  useEffect(() => {
    if (!mount.current && lottieRef.current) {
      mount.current = true
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('public/assets/lotties/congratulations.json'),
      })
    }
  }, [])

  return (
    <LoadingContainer loading={isLoading}>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'px-[20px]',
          'bg-black',
          'h-[100vh]',
          'relative',
          'overflow-hidden',
        )}
      >
        <div
          ref={lottieRef}
          className={clsx(
            'absolute',
            'top-[55%]',
            'left-[50%]',
            'translate-y-[-50%]',
            'translate-x-[-50%]',
            'w-[90%]',
            'max-w-[400px]',
          )}
        />
        <div
          className={clsx('flex', 'flex-1', 'items-center', 'justify-center')}
          style={{ zIndex: 2 }}
        >
          <div className={clsx('flex', 'flex-col', 'items-center')}>
            <div className={clsx('text-red', 'text-lg', 'font-bold')}>
              프로필 생성 완료!
            </div>
            <div
              className={clsx(
                'text-3xl',
                'text-center',
                'font-bold',
                'text-white',
                'mt-[16px]',
                'mb-[74px]',
              )}
            >
              {myProfile?.nickname}님, 하루 블럭에
              <br />
              오신 것을 환영해요
            </div>
            {myProfile?.imgUrl?.includes(
              '/onboarding/default_profile_image.png',
            ) ? (
              <DarkProfileIcon />
            ) : (
              <PercentageProfile
                dark
                percentage={65}
                imgSrc={myProfile?.imgUrl}
                size="md"
              />
            )}
          </div>
        </div>
        <div className="mb-[15px]">
          <Button backgroundColor="red" onClick={handleGoMain}>
            <div className={clsx('text-lg')}>하루블럭 시작하기</div>
          </Button>
        </div>
      </div>
    </LoadingContainer>
  )
}

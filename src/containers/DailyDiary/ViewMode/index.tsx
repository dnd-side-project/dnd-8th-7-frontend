import { useEffect } from 'react'
import clsx from 'clsx'

import { dayBlockAPI } from '@/api'
import { GetDailyReviewParams } from '@/api/types/base.types'
import useHttpRequest from '@/hooks/useHttpRequest'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import Header from '@/components/Header'
import { BottomButtonLayout } from '@/components/Layout'
import LoadingContainer from '@/components/Loading/Container'
import Secret from '@/components/Secret'
import ProfileHeader from '../ProfileHeader'

const LABEL_STYLE = 'text-lg font-bold text-black mt-[40px] mb-[10px]'

interface Props {
  reviewId: number
  date: string
  onEditClick: () => void
}

export default function ViewModePage({ reviewId, date, onEditClick }: Props) {
  const [diary, getDiary, isGetLoading] = useHttpRequest(
    (params: GetDailyReviewParams) =>
      dayBlockAPI.getDailyReview(params).then(({ data }) => data),
  )

  const [metrics, getMetrics, isMetricLoading] = useHttpRequest(() =>
    dayBlockAPI.getMyDailyBlockMetric({ date }),
  )
  const [, deleteReview, isDeleteLoading] = useHttpRequest(() =>
    dayBlockAPI.deleteDailyReview({ reviewId }),
  )

  console.log(metrics)

  const handleDeleteClick = () => {
    deleteReview(undefined, {
      onSuccess: () => {
        rnWebViewBridge.close()
      },
    })
  }

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  useEffect(() => {
    getDiary({ reviewId })
    getMetrics()
  }, [])

  return (
    <LoadingContainer loading={isGetLoading || isMetricLoading}>
      <LoadingContainer loading={isDeleteLoading} />
      <BottomButtonLayout
        buttonText="수정하기"
        buttonProps={{
          onClick: onEditClick,
        }}
      >
        <div className={clsx('pt-[56px]', 'px-[20px]')}>
          <Header
            title={'하루 일기'}
            rightButton={'delete'}
            leftButton="back"
            onLeftButtonClick={handleGoBack}
            onRightButtonClick={handleDeleteClick}
          />
          <ProfileHeader metrics={metrics} />
          <div className={clsx('mt-[30px]', 'flex', 'gap-[30px]', 'flex-col')}>
            {diary?.isSecret && (
              <Secret>이 글은 친구들에게 보이지 않아요</Secret>
            )}
            <div>
              <div className={clsx(LABEL_STYLE, 'mt-[36px]')}>오늘의 감정</div>
              <div className={clsx('text-[30px]')}>{diary?.emoji}</div>
            </div>
            <div>
              <div className={clsx(LABEL_STYLE, 'mt-[36px]')}>하루 일기</div>
              <div
                className={clsx('text-lg', 'font-[500]', 'text-textGray-100')}
              >
                {diary?.review}
              </div>
            </div>
          </div>
        </div>
      </BottomButtonLayout>
    </LoadingContainer>
  )
}

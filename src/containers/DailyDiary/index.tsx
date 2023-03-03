import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import useRNEmojiBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNEmojiBottomSheet'

import useHttpRequest from '@/hooks/useHttpRequest'
import { GetDailyReviewParams } from '@/api/types/base.types'
import { dayBlockAPI } from '@/api'

import LoadingContainer from '@/components/Loading/Container'
import { BottomButtonLayout } from '@/components/Layout'
import Header from '@/components/Header'
import Switch from '@/components/Switch'
import { FaceIcon } from '@/components/Icons'
import DiaryTextArea from './DiaryTextArea'
import ProfileHeader from './ProfileHeader'
import CreateOrUpdatePage from './CreateOrUpdate'
import ViewModePage from './ViewMode'

const LABEL_STYLE = 'text-lg font-bold text-black mt-[40px] mb-[10px]'
const SUB_TITLE_STYLE = 'text-lg tracking-[-0.006em] text-black mb-[6px]'
const DESCRIPTION_STYLE = 'text-sm tracking-[-0.004em] text-textGray-100'

const DIARY_MAX_LENGTH = 100

export default function DailyDiaryContainer() {
  const router = useRouter()
  const date = router.query?.date as string
  const reviewId = +(router.query?.reviewId as string)

  const [open, close] = useRNEmojiBottomSheet('newBlock')

  const [metrics, getMetrics, isMetricLoading] = useHttpRequest(() =>
    dayBlockAPI.getMyDailyBlockMetric({ date }),
  )

  const [diary, getDiary, isGetLoading] = useHttpRequest(
    (params: GetDailyReviewParams) =>
      dayBlockAPI.getDailyReview(params).then(({ data }) => data),
  )
  const [, updateDiary, isUpdateLoading] = useHttpRequest(
    dayBlockAPI.updateDailyReview,
  )
  const [, createDiary, isCreateLoading] = useHttpRequest(
    dayBlockAPI.createDailyReview,
  )

  const [isEdited, setIsEdited] = useState(false)
  const [emoji, setEmoji] = useState<string>(diary?.emoji || '')
  const [review, setReviewText] = useState(diary?.review || '')
  const [isSecret, setIsSecret] = useState(diary?.secret || false)
  const isVaild = !!emoji && !!review.length

  const handleSubmit = () => {
    if (!emoji || !review?.length) {
      // TODO 에러 처리
      return
    }

    if (!Number.isNaN(reviewId)) {
      updateDiary(
        { reviewId, date, emoji, review, secret: isSecret },
        {
          onSuccess: () => handleGoBack(),
        },
      )
    } else {
      createDiary(
        { date, emoji, review, secret: isSecret },
        {
          onSuccess: () => handleGoBack(),
        },
      )
    }
  }

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleEditClick = () => {
    setIsEdited(true)
  }

  useEffect(() => {
    if (!Number.isNaN(reviewId)) {
      getDiary(
        { reviewId },
        {
          onSuccess: ({ emoji, review, secret }) => {
            setEmoji(emoji)
            setReviewText(review)
            setIsSecret(secret)
          },
        },
      )
    }
  }, [reviewId])

  useEffect(() => {
    if (date) {
      getMetrics()
    }
  }, [date])

  if (!date) {
    rnWebViewBridge.close()
    return
  }

  return (
    <>
      {Number.isNaN(reviewId) || isEdited ? (
        <CreateOrUpdatePage date={date} reviewId={reviewId} />
      ) : (
        <ViewModePage
          date={date}
          reviewId={reviewId}
          onEditClick={handleEditClick}
        />
      )}
    </>
  )
}

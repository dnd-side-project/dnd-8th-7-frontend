import { ChangeEvent, useEffect, useState } from 'react'
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
import DiaryTextArea from '../DiaryTextArea'
import ProfileHeader from '../ProfileHeader'

const LABEL_STYLE = 'text-lg font-bold text-black mt-[40px] mb-[10px]'
const SUB_TITLE_STYLE = 'text-lg tracking-[-0.006em] text-black mb-[6px]'
const DESCRIPTION_STYLE = 'text-sm tracking-[-0.004em] text-textGray-100'

const DIARY_MAX_LENGTH = 100

interface Props {
  date: string
  reviewId: number
}

export default function CreateOrUpdatePage({ date, reviewId }: Props) {
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

  const [emoji, setEmoji] = useState<string>(diary?.emoji || '')
  const [review, setReviewText] = useState(diary?.review || '')
  const [isSecret, setIsSecret] = useState(diary?.isSecret || false)
  const isVaild = !!emoji && !!review.length

  const handleSubmit = () => {
    if (!emoji || !review?.length) {
      // TODO 에러 처리
      return
    }

    if (!Number.isNaN(reviewId)) {
      updateDiary(
        { reviewId, date, emoji, review, isSecret },
        {
          onSuccess: () => handleGoBack(),
        },
      )
    } else {
      createDiary(
        { date, emoji, review, isSecret },
        {
          onSuccess: () => handleGoBack(),
        },
      )
    }
  }

  const handleGoBack = () => {
    rnWebViewBridge.close()
  }

  const handleSecretChange = (value: boolean) => {
    setIsSecret(value)
  }

  const handleDiaryChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText((target?.value || '').slice(0, DIARY_MAX_LENGTH))
  }

  const handleEmojiClick = () => {
    open({
      onItemClick: (key) => {
        setEmoji(key)
        close()
      },
    })
  }

  useEffect(() => {
    if (!Number.isNaN(reviewId)) {
      getDiary(
        { reviewId },
        {
          onSuccess: ({ emoji, review, isSecret }) => {
            setEmoji(emoji)
            setReviewText(review)
            setIsSecret(isSecret)
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

  return (
    <LoadingContainer loading={isGetLoading || isMetricLoading}>
      <LoadingContainer
        loading={isCreateLoading || isUpdateLoading}
        backgroundMask
      />
      <BottomButtonLayout
        buttonText="완료"
        buttonProps={{
          onClick: handleSubmit,
          disabled: !isVaild,
        }}
      >
        <Header
          title={'하루 일기'}
          leftButton={'back'}
          onLeftButtonClick={handleGoBack}
        />
        <div className={clsx('pt-[56px]', 'px-[20px]')}>
          <ProfileHeader metrics={metrics} />
          <div className={clsx(LABEL_STYLE, 'mt-[36px]')}>오늘의 감정</div>
          <button
            onClick={handleEmojiClick}
            className={clsx(
              'bg-gray-50',
              'w-[70px]',
              'h-[70px]',
              'flex',
              'items-center',
              'justify-center',
              'rounded-lg',
            )}
          >
            {emoji || <FaceIcon className="fill-gray-400" />}
          </button>
          <div className={clsx('flex', 'justify-between', LABEL_STYLE)}>
            <div>하루 일기</div>
            <div
              className={clsx(
                'text-[14px]',
                'leading-[140%]',
                'text-textGray-50',
                'font-[500]',
              )}
            >
              {review.length}/{DIARY_MAX_LENGTH}
            </div>
          </div>
          <DiaryTextArea
            onChange={handleDiaryChange}
            maxLength={DIARY_MAX_LENGTH}
            defaultValue={diary?.review}
          />
          <div className={LABEL_STYLE}>추가 설정</div>
          <div className={clsx('flex', 'justify-between')}>
            <div>
              <div className={clsx(SUB_TITLE_STYLE)}>쉿! 비밀로 하기</div>
              <div className={clsx(DESCRIPTION_STYLE)}>
                친구들에게 보이지 않아요
              </div>
            </div>
            <Switch
              onChange={handleSecretChange}
              defaultChecked={diary?.isSecret}
            />
          </div>
        </div>
      </BottomButtonLayout>
    </LoadingContainer>
  )
}

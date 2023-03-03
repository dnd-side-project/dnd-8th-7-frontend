import { useState } from 'react'
import { useRouter } from 'next/router'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import CreateOrUpdatePage from './CreateOrUpdate'
import ViewModePage from './ViewMode'

export default function DailyDiaryContainer() {
  const router = useRouter()
  const date = router.query?.date as string
  const reviewId = +(router.query?.reviewId as string)

  const [isEdited, setIsEdited] = useState(false)

  const handleEditClick = () => {
    setIsEdited(true)
  }

  if (!date) {
    rnWebViewBridge.close()
    return null
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

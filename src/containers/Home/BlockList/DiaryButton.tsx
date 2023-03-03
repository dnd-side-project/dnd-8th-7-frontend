import { PATH } from '@/constants/path'
import { BASE_URL } from '@/constants/urls'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import Button from '@/components/Button'
import { EditIcon } from '@/components/Icons'
import qs from 'query-string'

interface Props {
  date: string
  reviewId?: number | null
}

const DiaryButton = ({ date, reviewId }: Props) => {
  const handleDiaryCreate = () => {
    rnWebViewBridge.open({
      key: 'dailyDiary',
      url:
        BASE_URL +
        PATH.dailyDiary +
        `?${qs.stringify(
          {
            date,
            reviewId,
          },
          {
            skipNull: true,
          },
        )}`,
    })
  }

  return (
    <Button
      outlined
      rounded="sm"
      backgroundColor="white"
      className="text-textGray-200 py-1.5 !px-3 !w-fit"
      onClick={handleDiaryCreate}
    >
      <EditIcon className="!fill-textGray-200 mr-1" width={14} height={14} />
      하루 일기
    </Button>
  )
}

export default DiaryButton

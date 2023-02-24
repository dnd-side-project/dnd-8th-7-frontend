import { useEffect } from 'react'
import dayjs from 'dayjs'
import { MOCK_WEEKLY_BLOCKS } from '@/constants/block'
import Button from '@/components/Button'
import { AddIcon } from '@/components/Icons'
import useSelectedDateState from '@/store/selectedDate'
import WeeklyBlocks from './WeeklyBlocks'
import BlockList from '../BlockList'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

const AddButton = ({
  text,
  onClick,
}: {
  text: string
  onClick: () => void
}) => {
  return (
    <Button
      color="gray"
      fontWeight="bold"
      className="py-[11px]"
      onClick={onClick}
    >
      <AddIcon className="!fill-textGray-200" width={18} height={18} />
      {text}
    </Button>
  )
}

const DailyBlockPanel = () => {
  const setSelectedDate = useSelectedDateState((state) => state.setSelectedDate)
  useEffect(() => {
    const today = String(dayjs().format('YYYY-MM-DD'))
    setSelectedDate(today)
  }, [setSelectedDate])

  const handleAddSavedBlock = () => {
    rnWebViewBridge.open({
      key: 'savedBlock',
      url: 'http://localhost:3000/blocks/saved',
    })
  }

  const handleAddNewBlock = () => {
    rnWebViewBridge.open({
      key: 'newBlock',
      url: 'http://localhost:3000/blocks/new',
    })
  }

  return (
    <div className="px-5">
      <WeeklyBlocks weeklyBlocks={MOCK_WEEKLY_BLOCKS} />
      <BlockList />

      <div className="flex gap-2">
        <AddButton text="블럭 불러오기" onClick={handleAddSavedBlock} />
        <AddButton text="새 블럭 만들기" onClick={handleAddNewBlock} />
      </div>
    </div>
  )
}
export default DailyBlockPanel

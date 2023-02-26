import { useEffect } from 'react'
import dayjs from 'dayjs'
import { GetDailyBlocksOnWeekResponse } from '@/api/types'
import useSelectedDateState from '@/store/selectedDate'
import WeeklyBlocks from './WeeklyBlocks'

const DailyBlockPanel = ({
  dailyBlocks,
}: {
  dailyBlocks: GetDailyBlocksOnWeekResponse['dailyBlocks']
}) => {
  const setSelectedDate = useSelectedDateState((state) => state.setSelectedDate)
  useEffect(() => {
    const today = String(dayjs().format('YYYY-MM-DD'))
    setSelectedDate(today)
  }, [setSelectedDate])

  return (
    <div className="px-5">
      <WeeklyBlocks weeklyBlocks={dailyBlocks} />
    </div>
  )
}
export default DailyBlockPanel

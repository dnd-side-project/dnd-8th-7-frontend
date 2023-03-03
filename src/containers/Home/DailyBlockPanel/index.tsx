import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'
import WeeklyBlocks from './WeeklyBlocks'

const DailyBlockPanel = ({
  dailyBlocks,
}: {
  dailyBlocks: GetDailyBlocksOnWeekResponse
}) => {
  return <WeeklyBlocks weeklyBlocks={dailyBlocks} />
}
export default DailyBlockPanel

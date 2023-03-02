import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'
import WeeklyBlocks from './WeeklyBlocks'

const DailyBlockPanel = ({
  dailyBlocks,
}: {
  dailyBlocks: GetDailyBlocksOnWeekResponse['dailyBlocks']
}) => {
  return <WeeklyBlocks weeklyBlocks={dailyBlocks} />
}
export default DailyBlockPanel

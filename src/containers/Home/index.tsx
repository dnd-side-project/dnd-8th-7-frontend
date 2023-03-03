import { useEffect } from 'react'
import { dayBlockAPI } from '@/api'
import dayjs from 'dayjs'
import Tabs from '@/components/Tabs'
import ProfileHeader from './ProfileHeader'
import CalendarPanel from './CalendarPanel'
import DailyBlockPanel from './DailyBlockPanel'
import BlockList from './BlockList'
import useHttpRequest from '@/hooks/useHttpRequest'
import useSelectedDateState from '@/store/selectedDate'
import { GetDailyBlocksOnWeekParams } from '@/api/types/base.types'

const Home = () => {
  const today = String(dayjs().format('YYYY-MM-DD'))
  const selectedDate = useSelectedDateState((state) => state.date)
  const setSelectedDate = useSelectedDateState((state) => state.setSelectedDate)

  const [weeklyBlocks, fetchWeeklyBlocks, isLoading] = useHttpRequest(
    (params: GetDailyBlocksOnWeekParams) =>
      dayBlockAPI.getDailyBlocksOnWeek(params).then(({ data }) => data),
  )

  useEffect(() => {
    setSelectedDate(today)
    fetchWeeklyBlocks({ date: today })
  }, [])

  useEffect(() => {
    fetchWeeklyBlocks({ date: selectedDate })
  }, [selectedDate])

  const onVisibility = () => {
    if (!document.hidden) {
      fetchWeeklyBlocks({ date: selectedDate })
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
    }
  })

  if (!weeklyBlocks || isLoading) return null
  const { dailyBlocks } = weeklyBlocks

  return (
    <div className="inner px-5 pb-14">
      <ProfileHeader />

      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab id={0} text="하루 블럭" />
          <Tabs.Tab id={1} text="달력" />
        </Tabs.TabList>
        <Tabs.TabPanel id={0}>
          <DailyBlockPanel dailyBlocks={dailyBlocks} />
        </Tabs.TabPanel>
        <Tabs.TabPanel id={1}>
          <CalendarPanel />
        </Tabs.TabPanel>
      </Tabs>

      <BlockList />
    </div>
  )
}

export default Home

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

const Home = () => {
  const today = String(dayjs().format('YYYY-MM-DD'))
  const setSelectedDate = useSelectedDateState((state) => state.setSelectedDate)

  const [weeklyBlocks, fetchWeeklyBlocks, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getDailyBlocksOnWeek({ date: today }).then(({ data }) => data),
  )

  useEffect(() => {
    fetchWeeklyBlocks()
    setSelectedDate(today)
  }, [])

  const onVisibility = () => {
    if (!document.hidden) {
      fetchWeeklyBlocks()
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
    }
  })

  if (!weeklyBlocks || isLoading) return null
  const { user, dailyBlocks } = weeklyBlocks

  return (
    <div className="inner px-5 pb-14">
      <ProfileHeader user={user} />

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

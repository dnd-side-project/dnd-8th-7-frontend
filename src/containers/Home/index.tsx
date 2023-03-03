import { useEffect } from 'react'
import { dayBlockAPI } from '@/api'
import Tabs from '@/components/Tabs'
import ProfileHeader from './ProfileHeader'
import CalendarPanel from './CalendarPanel'
import DailyBlockPanel from './DailyBlockPanel'
import BlockList from './BlockList'
import useHttpRequest from '@/hooks/useHttpRequest'
import useSelectedDateState from '@/store/selectedDate'
import LoadingContainer from '@/components/Loading/Container'

const Home = () => {
  const selectedDate = useSelectedDateState((state) => state.date)

  const [weeklyBlocks, fetchWeeklyBlocks, isLoading, , isFetch] =
    useHttpRequest(() =>
      dayBlockAPI
        .getDailyBlocksOnWeek({ date: selectedDate })
        .then(({ data }) => data),
    )

  useEffect(() => {
    fetchWeeklyBlocks()
  }, [selectedDate])

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

  if (!weeklyBlocks) return null

  return (
    <div className="inner px-5 pb-14">
      <ProfileHeader />

      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab id={0} text="하루 블럭" />
          <Tabs.Tab id={1} text="달력" />
        </Tabs.TabList>
        <Tabs.TabPanel id={0}>
          <LoadingContainer loading={!isFetch}>
            <LoadingContainer loading={isLoading} />
            <DailyBlockPanel dailyBlocks={weeklyBlocks} />
          </LoadingContainer>
        </Tabs.TabPanel>
        <Tabs.TabPanel id={1}>
          <CalendarPanel />
        </Tabs.TabPanel>
      </Tabs>

      <BlockList fetchWeeklyBlocks={fetchWeeklyBlocks} />
    </div>
  )
}

export default Home

import { useEffect, useState } from 'react'
import { dayBlockAPI } from '@/api'
import dayjs from 'dayjs'
import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'
import Tabs from '@/components/Tabs'
import ProfileHeader from './ProfileHeader'
import CalendarPanel from './CalendarPanel'
import DailyBlockPanel from './DailyBlockPanel'
import BlockList from './BlockList'

const Home = () => {
  const [data, setData] = useState<GetDailyBlocksOnWeekResponse | null>(null)
  const today = String(dayjs().format('YYYY-MM-DD'))

  useEffect(() => {
    const getDailyBlocks = async () => {
      await dayBlockAPI
        .getDailyBlocksOnWeek({ date: today })
        .then(({ data }) => setData(data))
    }
    getDailyBlocks()
  }, [today])

  if (!data) return null
  const { user, dailyBlocks } = data

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

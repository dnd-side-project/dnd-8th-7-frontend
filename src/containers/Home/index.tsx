import { useEffect, useState } from 'react'
import { dayBlockAPI } from '@/api'
import dayjs from 'dayjs'
import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'
import Tabs from '@/components/Tabs'
import Button from '@/components/Button'
import { AddIcon } from '@/components/Icons'
import { BASE_URL } from '@/constants/urls'
import ProfileHeader from './ProfileHeader'
import CalendarPanel from './CalendarPanel'
import DailyBlockPanel from './DailyBlockPanel'
import BlockList from './BlockList'

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

  const handleAddSavedBlock = () => {
    rnWebViewBridge.open({
      key: 'savedBlock',
      url: `${BASE_URL}/blocks/saved`,
    })
  }

  const handleAddNewBlock = () => {
    rnWebViewBridge.open({
      key: 'newBlock',
      url: `${BASE_URL}/blocks/new`,
    })
  }

  if (!data) return null
  const { user, dailyBlocks } = data

  return (
    <div className="inner px-5">
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

      <div className="flex gap-2">
        <AddButton text="블럭 불러오기" onClick={handleAddSavedBlock} />
        <AddButton text="새 블럭 만들기" onClick={handleAddNewBlock} />
      </div>
    </div>
  )
}

export default Home

import Tabs from '@/components/Tabs'
import ProfileHeader from './ProfileHeader'
import CalendarPanel from './CalendarPanel'
import DailyBlockPanel from './DailyBlockPanel'

const USER_NICKNAME = '김새롬' // TODO : 서버 데이터 연결

const Home = () => {
  return (
    <div className="inner">
      <ProfileHeader user={USER_NICKNAME} />

      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab id={0} text="하루 블럭" />
          <Tabs.Tab id={1} text="달력" />
        </Tabs.TabList>
        <Tabs.TabPanel id={0}>
          <DailyBlockPanel />
        </Tabs.TabPanel>
        <Tabs.TabPanel id={1}>
          <CalendarPanel />
        </Tabs.TabPanel>
      </Tabs>
    </div>
  )
}

export default Home

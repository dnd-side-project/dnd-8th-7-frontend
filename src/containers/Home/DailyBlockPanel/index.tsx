import Button from '@/components/Button'
import Date from '@/components/Date'
import { AddIcon } from '@/components/Icons'
import NoData from '@/components/NoData'

// TODO : 서버 데이터 연결
const DATE = '2022-01-25'
const TOTAL_BLOCK = 0
const TOTAL_TASK = 0

const DailyBlockPanel = () => {
  return (
    <div className="px-5 mt-7">
      <Date date={DATE} totalBlock={TOTAL_BLOCK} totalTask={TOTAL_TASK} />
      <div className="my-5">
        <NoData outlined />
      </div>

      <Button rounded="lg" className="!py-[15px]">
        <AddIcon width={18} height={18} className="fill-white" />
        <p className="ml-px">새 블럭 만들기</p>
      </Button>
    </div>
  )
}

export default DailyBlockPanel

import Button from '@/components/Button'
import Date from '@/components/Date'
import { AddIcon } from '@/components/Icons'
import Block from '@/components/Block'
import { MOCK_BLOCK_LIST } from '@/constants/block'
import WeeklyBlocks from './WeeklyBlocks'

// TODO : 서버 데이터 연결
const DATE = '2022-01-25'
const TOTAL_BLOCK = 0
const TOTAL_TASK = 0

const DailyBlockPanel = () => {
  return (
    <div className="px-5 mt-7">
      <WeeklyBlocks />
      <Date date={DATE} totalBlock={TOTAL_BLOCK} totalTask={TOTAL_TASK} />
      <div className="my-5">
        {/* Data 없는 경우 처리 <NoData outlined /> */}
        {MOCK_BLOCK_LIST.map(
          (
            { color, icon, blockTitle, sumOfTask, sumOfDoneTask, tasks },
            idx,
          ) => (
            <div key={idx} className="mb-2">
              <Block
                color={color}
                icon={icon}
                blockTitle={blockTitle}
                sumOfTask={sumOfTask}
                sumOfDoneTask={sumOfDoneTask}
                tasks={tasks}
              />
            </div>
          ),
        )}
      </div>

      <Button rounded="lg" className="!py-[15px]">
        <AddIcon width={18} height={18} className="fill-white" />
        <p className="ml-px">새 블럭 만들기</p>
      </Button>
    </div>
  )
}

export default DailyBlockPanel

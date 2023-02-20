import Button from '@/components/Button'
import Date from '@/components/Date'
import { AddIcon } from '@/components/Icons'
import Block from '@/components/Block'
import NoData from '@/components/NoData'
import { MOCK_BLOCK_LIST, MOCK_WEEKLY_BLOCKS } from '@/constants/block'
import WeeklyBlocks from './WeeklyBlocks'

const DailyBlockPanel = () => {
  const { date, totalBlock, totalTask, blocks } = MOCK_BLOCK_LIST

  const handleBlockCreate = () => {
    // 블럭 생성 페이지로 이동
  }

  return (
    <div className="px-5 mt-7">
      <WeeklyBlocks weeklyBlocks={MOCK_WEEKLY_BLOCKS} />
      <Date date={date} totalBlock={totalBlock} totalTask={totalTask} />
      <div className="mt-[18px] mb-5">
        {blocks.length === 0 ? (
          <>
            <NoData outlined />
            <Button
              rounded="lg"
              className="!py-[15px] mt-5"
              onClick={handleBlockCreate}
            >
              <AddIcon width={18} height={18} className="!fill-white" />
              <p className="ml-px">새 블럭 만들기</p>
            </Button>
          </>
        ) : (
          blocks.map(
            ({ color, icon, title, sumOfTask, sumOfDoneTask, tasks }, idx) => (
              <div key={idx} className="mb-2">
                <Block
                  color={color}
                  icon={icon}
                  title={title}
                  sumOfTask={sumOfTask}
                  sumOfDoneTask={sumOfDoneTask}
                  tasks={tasks}
                />
              </div>
            ),
          )
        )}
      </div>
    </div>
  )
}

export default DailyBlockPanel

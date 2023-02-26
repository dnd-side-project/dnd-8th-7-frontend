import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Date from '@/components/Date'
import { AddIcon } from '@/components/Icons'
import Block from '@/components/Block'
import NoData from '@/components/NoData'
import useSelectedDateState from '@/store/selectedDate'
import DiaryButton from './DiaryButton'
import { dayBlockAPI } from '@/api'
import { GetDayBlocksResponse } from '@/api/types/base.types'

const BlockList = () => {
  const selectedDate = useSelectedDateState((state) => state.date)
  const [data, setData] = useState<GetDayBlocksResponse | null>(null)

  const handleBlockCreate = () => {
    // 블럭 생성 페이지로 이동
  }

  useEffect(() => {
    const getBlockList = async () => {
      dayBlockAPI
        .getDayBlocks({ date: selectedDate })
        .then(({ data }) => setData(data))
    }
    getBlockList()
  }, [selectedDate])

  if (!data) return null
  const { totalBlock, totalTask, blocks } = data

  return (
    <>
      <div className="flex items-end justify-between">
        <Date
          date={selectedDate}
          totalBlock={totalBlock}
          totalTask={totalTask}
        />
        <DiaryButton />
      </div>

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
            (
              { blockId, color, icon, title, sumOfTask, sumOfDoneTask, tasks },
              idx,
            ) => (
              <div key={idx} className="mb-2">
                <Block
                  blockId={blockId}
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
    </>
  )
}

export default BlockList

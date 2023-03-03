import { useEffect } from 'react'
import Button from '@/components/Button'
import Date from '@/components/Date'
import { AddIcon } from '@/components/Icons'
import Block from '@/components/Block'
import NoData from '@/components/NoData'
import useSelectedDateState from '@/store/selectedDate'
import { dayBlockAPI } from '@/api'
import useHttpRequest from '@/hooks/useHttpRequest'
import useBlockListStore from '@/store/blocks'
import { BASE_URL } from '@/constants/urls'
import DiaryButton from './DiaryButton'

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
      backgroundColor="gray"
      fontWeight="bold"
      className="py-[11px]"
      onClick={onClick}
    >
      <AddIcon className="!fill-textGray-200" width={18} height={18} />
      {text}
    </Button>
  )
}

const BlockList = () => {
  const selectedDate = useSelectedDateState((state) => state.date)
  const storedBlocks = useBlockListStore((state) => state.blockList) // store에 저장된 블럭
  const setStoredBlocks = useBlockListStore((state) => state.setBlockList)

  const [dayBlocks, fetchDayBlocks, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getDayBlocks({ date: selectedDate }).then(({ data }) => data),
  )

  const handleAddSavedBlock = () => {
    rnWebViewBridge.open({
      key: 'savedBlock',
      url: `${BASE_URL}/blocks/saved?date=${selectedDate}`,
    })
  }

  const handleAddNewBlock = () => {
    rnWebViewBridge.open({
      key: 'newBlock',
      url: `${BASE_URL}/blocks/new?date=${selectedDate}`,
    })
  }

  useEffect(() => {
    if (!selectedDate) return
    fetchDayBlocks(undefined, {
      onSuccess: (data) => {
        setStoredBlocks(data)
      },
    })
  }, [selectedDate])

  const onVisibility = () => {
    if (!document.hidden) {
      fetchDayBlocks()
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
    }
  })

  if (!dayBlocks || isLoading) return null
  const { numOfTotalBlocks, numOfTotalTasks, blocks = [] } = storedBlocks

  return (
    <>
      <div className="flex items-end justify-between">
        <Date
          date={selectedDate}
          numOfTotalBlocks={numOfTotalBlocks}
          numOfTotalTasks={numOfTotalTasks}
        />
        <DiaryButton date={selectedDate} reviewId={dayBlocks?.reviewId} />
      </div>

      <div className="mt-[18px] mb-5">
        {blocks.length === 0 ? (
          <>
            <NoData outlined />
            <Button
              rounded="lg"
              className="!py-[15px] mt-5"
              onClick={handleAddNewBlock}
            >
              <AddIcon width={18} height={18} className="!fill-white" />
              <p className="ml-px">새 블럭 만들기</p>
            </Button>
          </>
        ) : (
          blocks.map(
            (
              {
                blockId,
                backgroundColor,
                emoji,
                title,
                numOfTasks,
                numOfDoneTask,
                tasks,
              },
              idx,
            ) => {
              const index = blocks.findIndex(
                (block) => block.blockId === blockId,
              )
              return (
                <div key={idx} className="mb-2">
                  <Block
                    index={index}
                    blockId={blockId}
                    backgroundColor={backgroundColor}
                    emoji={emoji}
                    title={title}
                    numOfTasks={numOfTasks}
                    numOfDoneTask={numOfDoneTask}
                    tasks={tasks}
                  />
                </div>
              )
            },
          )
        )}
      </div>

      {blocks.length !== 0 && (
        <div className="flex gap-2">
          <AddButton text="블럭 불러오기" onClick={handleAddSavedBlock} />
          <AddButton text="새 블럭 만들기" onClick={handleAddNewBlock} />
        </div>
      )}
    </>
  )
}

export default BlockList

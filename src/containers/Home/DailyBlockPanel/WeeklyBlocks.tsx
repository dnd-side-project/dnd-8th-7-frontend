import { useState } from 'react'
import dayjs from 'dayjs'
import clsx from 'clsx'
import DailyBlock from '@/components/DailyBlock'
import { DAYS } from '@/constants/block'
import { noop } from '@/utils'
import useSelectedDateState from '@/store/selectedDate'
import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'

const DayBlock = ({
  colors,
  date,
  isActive,
  onClick = noop,
}: {
  colors: string[]
  date: number
  isActive: boolean
  onClick?: () => void
}) => {
  return (
    <>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'items-center',
          'pt-1.5',
          'pb-1',
          'px-1.5',
          'rounded-[11px]',
          'cursor-pointer',
          'border',
          'border-white',
          { 'border-gray-300': isActive },
        )}
        onClick={onClick}
      >
        <DailyBlock colors={colors} />
        <p
          className={clsx(
            'mt-1',
            isActive ? 'text-black' : 'text-textGray-100',
          )}
        >
          {date}
        </p>
      </div>
    </>
  )
}

const DailyBlockPanel = ({
  weeklyBlocks,
}: {
  weeklyBlocks: GetDailyBlocksOnWeekResponse['dailyBlocks']
}) => {
  const todayIdx = dayjs().day() % 7
  const [activeBlockIdx, setActiveBlockIdx] = useState(todayIdx)
  const setSelectedDate = useSelectedDateState((state) => state.setSelectedDate)

  const handleBlockClick = (formattedDate: string, idx: number) => {
    setSelectedDate(formattedDate)
    setActiveBlockIdx(idx)
  }

  return (
    <div className="flex justify-between mx-auto my-7 min-w-80 max-w-[400px]">
      {weeklyBlocks.map(({ date: dateTime, color }, idx) => {
        const formattedDate = dayjs(dateTime).format('YYYY-MM-DD')
        const day = dayjs(dateTime).day()
        const date = dayjs(dateTime).date()

        return (
          <div key={idx} className="flex flex-col items-center text-base">
            <p className="text-textGray-50 mb-[5px]">{DAYS[day % 7]}</p>
            <DayBlock
              colors={color}
              date={date}
              isActive={activeBlockIdx === idx}
              onClick={() => handleBlockClick(formattedDate, idx)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default DailyBlockPanel

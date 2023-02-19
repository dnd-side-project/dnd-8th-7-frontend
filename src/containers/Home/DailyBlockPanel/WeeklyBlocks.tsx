import { PropsWithChildren } from 'react'
import dayjs from 'dayjs'
import Block from '@/components/Block'
import { BlockColorType, DAYS, MOCK_WEEKLY_BLOCKS } from '@/constants/block'

const DayBlock = ({
  day,
  colors,
  date,
  children,
}: PropsWithChildren<{
  day: string
  colors: BlockColorType[]
  date: number
}>) => {
  return (
    <div className="flex flex-col items-center text-base px-[11px]">
      <p className="text-textGray-50 mb-[11px]">{day}</p>
      {children}
      <Block colors={colors} />
      <p className="text-textGray-100">{date}</p>
    </div>
  )
}

const WeeklyBlocks = () => {
  return (
    <div className="flex justify-center mb-7">
      {MOCK_WEEKLY_BLOCKS.map(({ date: dateTime, colors }, idx) => {
        const day = dayjs(dateTime).day()
        const date = dayjs(dateTime).date()
        return (
          <DayBlock day={DAYS[day % 7]} key={idx} colors={colors} date={date} />
        )
      })}
    </div>
  )
}

export default WeeklyBlocks

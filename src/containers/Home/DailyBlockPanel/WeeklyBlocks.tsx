import dayjs from 'dayjs'
import clsx from 'clsx'
import DailyBlock from '@/components/DailyBlock'
import { DAYS, MOCK_WEEKLY_BLOCKS } from '@/constants/block'

const DayBlock = ({
  colors,
  date,
  isToday,
}: {
  colors: string[]
  date: number
  isToday: boolean
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
          { border: isToday },
        )}
      >
        <DailyBlock colors={colors} />
        <p
          className={clsx('mt-1', isToday ? 'text-black' : 'text-textGray-100')}
        >
          {date}
        </p>
      </div>
    </>
  )
}

const WeeklyBlocks = () => {
  const today = dayjs().day()

  return (
    <div className="flex justify-between mb-7 min-w-80">
      {MOCK_WEEKLY_BLOCKS.map(({ date: dateTime, colors }, idx) => {
        const day = dayjs(dateTime).day()
        const date = dayjs(dateTime).date()
        return (
          <div key={idx} className="flex flex-col items-center text-base">
            <p className="text-textGray-50 mb-[5px]">{DAYS[day % 7]}</p>
            <DayBlock colors={colors} date={date} isToday={today === day} />
          </div>
        )
      })}
    </div>
  )
}

export default WeeklyBlocks

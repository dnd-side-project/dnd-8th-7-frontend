import formatDate from '@/utils/formatDate'

interface Props {
  date: string
  numOfTotalBlocks: number
  numOfTotalTasks: number
}

const Date = ({ date, numOfTotalBlocks, numOfTotalTasks }: Props) => {
  const formattedDate = formatDate(date)

  return (
    <div className="flex flex-col bg-white">
      <p className="text-black font-bold text-lg">{formattedDate}</p>
      <p className="text-textGray-100 text-base mt-1.5">
        블럭 {numOfTotalBlocks}개, 할 일 {numOfTotalTasks}개
      </p>
    </div>
  )
}

export default Date

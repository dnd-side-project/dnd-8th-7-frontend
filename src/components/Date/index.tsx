import formatDate from '@/utils/formatDate'

interface Props {
  date: string
  totalBlock: number
  totalTask: number
}

const Date = ({ date, totalBlock, totalTask }: Props) => {
  const formattedDate = formatDate(date)

  return (
    <div className="flex flex-col bg-white">
      <p className="text-black font-bold text-lg">{formattedDate}</p>
      <p className="text-textGray-100 text-base mt-1.5">
        블럭 {totalBlock}개, 할 일 {totalTask}개
      </p>
    </div>
  )
}

export default Date

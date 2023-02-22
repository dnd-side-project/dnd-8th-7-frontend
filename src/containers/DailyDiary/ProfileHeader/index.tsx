import PercentageProfile from '@/components/PercentageProfile'
import formatDate from '@/utils/formatDate'

interface Props {
  profileImage?: string
  numOfBlocks: number
  numOfTasks: number
  numOfdoneTasks: number
  date: string
}

const ProfileHeader = ({
  profileImage,
  numOfBlocks,
  numOfTasks,
  numOfdoneTasks,
  date,
}: Props) => {
  return (
    <div className="flex justify-between items-start mt-[30px]">
      <div className="flex gap-x-[12px] items-center">
        <PercentageProfile
          imgSrc={profileImage}
          showNumber
          percentage={
            numOfTasks ? Math.round(numOfdoneTasks / numOfTasks) * 100 : 0
          }
        />
        <div className="flex-1">
          <div className="text-xl font-bold text-black self-center mb-[6px]">
            {formatDate(date)}
          </div>
          <div className="leading-[140%] text-[14px] font-[500] text-textGray-100 self-center">
            블럭 {numOfBlocks}개, 할 일 {numOfTasks}개
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader

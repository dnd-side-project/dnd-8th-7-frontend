import { DEFAULT_PROFILE_IMAGE_URL } from '@/constants/urls'
import formatDate from '@/utils/formatDate'

import PercentageProfile from '@/components/PercentageProfile'
import { GetMyDailyBlockMetricResponse } from '@/api/types/base.types'

interface Props {
  metrics?: GetMyDailyBlockMetricResponse
}

const ProfileHeader = ({ metrics }: Props) => {
  return (
    <div className="flex justify-between items-start mt-[30px]">
      <div className="flex gap-x-[12px] items-center">
        <PercentageProfile
          imgSrc={metrics?.user.imgUrl || DEFAULT_PROFILE_IMAGE_URL}
          showNumber
          percentage={metrics?.percentageOfDoneTasks}
        />
        <div className="flex-1">
          <div className="text-xl font-bold text-black self-center mb-[6px]">
            {formatDate(metrics?.date)}
          </div>
          <div className="leading-[140%] text-[14px] font-[500] text-textGray-100 self-center">
            블럭 {metrics?.numOfBlocks ?? '-'}개, 할 일{' '}
            {metrics?.numOfTasks ?? '-'}개
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader

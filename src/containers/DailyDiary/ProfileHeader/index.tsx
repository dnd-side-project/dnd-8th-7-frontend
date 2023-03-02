import { useEffect } from 'react'

import { dayBlockAPI } from '@/api'
import useHttpRequest from '@/hooks/useHttpRequest'

import { DEFAULT_PROFILE_IMAGE_URL } from '@/constants/urls'
import formatDate from '@/utils/formatDate'

import PercentageProfile from '@/components/PercentageProfile'

interface Props {
  date: string
}

const ProfileHeader = ({ date }: Props) => {
  const [myProfile, getMyprofile] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )
  const [blocks, getBlocks] = useHttpRequest(() =>
    dayBlockAPI.getDayBlocks({ date }).then(({ data }) => data),
  )
  const numOfdoneTasks =
    blocks?.blocks?.reduce(
      (res, { sumOfDoneTask }) => res + sumOfDoneTask,
      0,
    ) || 0

  useEffect(() => {
    getMyprofile()
    if (date) {
      getBlocks()
    }
  }, [date])

  return (
    <div className="flex justify-between items-start mt-[30px]">
      <div className="flex gap-x-[12px] items-center">
        <PercentageProfile
          imgSrc={myProfile?.imgPath || DEFAULT_PROFILE_IMAGE_URL}
          showNumber
          percentage={
            blocks?.totalTask
              ? Math.round(numOfdoneTasks / blocks.totalTask) * 100
              : 0
          }
        />
        <div className="flex-1">
          <div className="text-xl font-bold text-black self-center mb-[6px]">
            {formatDate(date)}
          </div>
          <div className="leading-[140%] text-[14px] font-[500] text-textGray-100 self-center">
            블럭 {blocks?.totalBlock ?? '-'}개, 할 일 {blocks?.totalTask ?? '-'}
            개
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader

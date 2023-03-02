import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'
import PercentageProfile from '@/components/PercentageProfile'

interface Props {
  user: GetDailyBlocksOnWeekResponse['user']
  profileImage?: string
}

const ProfileHeader = ({ user, profileImage = '' }: Props) => {
  return (
    <div className="flex justify-between items-start pt-[30px] pb-5">
      <div className="flex">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <PercentageProfile imgSrc={profileImage} percentage={0} />
        </div>
        <div className="ml-2.5 text-2xl font-bold text-black self-center">
          {user}님, <br />
          오늘 하루도 화이팅!
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader

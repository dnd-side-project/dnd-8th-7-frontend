import { GetDailyBlocksOnWeekResponse } from '@/api/types/base.types'
import { AlarmIcon } from '@/components/Icons'
import Profile from '@/components/Profile'

interface Props {
  user: GetDailyBlocksOnWeekResponse['user']
  profileImage?: string
}

const ProfileHeader = ({ user, profileImage = '' }: Props) => {
  return (
    <div className="flex justify-between items-start px-5 pt-[30px] pb-5">
      <div className="flex">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <Profile imgSrc={profileImage} />
        </div>
        <div className="ml-2.5 text-2xl font-bold text-black self-center">
          {user}님, <br />
          오늘 하루도 화이팅!
        </div>
      </div>

      <button type="button">
        <AlarmIcon />
      </button>
    </div>
  )
}

export default ProfileHeader

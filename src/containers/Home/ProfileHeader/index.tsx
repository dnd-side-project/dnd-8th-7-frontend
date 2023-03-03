import { useEffect } from 'react'
import { dayBlockAPI } from '@/api'
import PercentageProfile from '@/components/PercentageProfile'
import useHttpRequest from '@/hooks/useHttpRequest'

const ProfileHeader = () => {
  const [myProfile, fetchMyProfile, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )

  useEffect(() => {
    fetchMyProfile()
  }, [])

  if (!myProfile || isLoading) return null
  const { user, imgPath } = myProfile

  return (
    <div className="flex justify-between items-start pt-[30px] pb-5">
      <div className="flex">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <PercentageProfile imgSrc={imgPath} percentage={0} />
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

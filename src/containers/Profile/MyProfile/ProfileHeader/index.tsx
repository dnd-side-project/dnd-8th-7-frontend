import PercentageProfile, {
  Props as PercentageProfileProps,
} from '@/components/PercentageProfile'

interface Props extends PercentageProfileProps {
  nickname: string
}

const ProfileHeader = ({ nickname, ...props }: Props) => {
  return (
    <div className="flex justify-between items-start pb-[20px]">
      <div className="flex">
        <div className="flex items-center justify-center w-[60px] h-[60px]">
          <PercentageProfile {...props} />
        </div>
        <div className="ml-2.5 text-2xl font-bold text-black self-center">
          {nickname}님, <br />
          안녕하세요 반가워요
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader

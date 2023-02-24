import clsx from 'clsx'

import Profile, {
  Props as ProfileProps,
  SIZE_CONFIG as PROFILE_SIZE_CONFIG,
} from '@/components/Profile'
import { SizeConfig } from '@/components/Profile/types'
import { colors } from '@/styles/theme'

const CENTER_STYLE = [
  'absolute',
  'top-[50%]',
  'left-[50%]',
  'translate-x-[-50%]',
  'translate-y-[-50%]',
]

export const SIZE_CONFIG: SizeConfig = {
  sm: 'w-[60px] h-[60px]',
  md: 'w-[120px] h-[120px]',
}
export const BORDER_CONFIG: SizeConfig = {
  sm: 'border-[2px]',
  md: 'border-[3px]',
}
const PERCENTAGE_CONFIG: SizeConfig = {
  sm: 'w-[65px] h-[65px]',
  md: 'w-[125px] h-[125px]',
}

export interface Props extends ProfileProps {
  percentage: number
  showNumber?: boolean
}

const PercentageProfile = ({
  imgSrc = '',
  size = 'sm',
  percentage,
  showNumber = false,
}: Props) => {
  return (
    <div className={clsx('relative', SIZE_CONFIG[size])}>
      <div className={clsx(PERCENTAGE_CONFIG[size], CENTER_STYLE)}>
        <Percentage percentage={percentage} width={'100%'} height={'100%'} />
      </div>
      <div className={clsx(CENTER_STYLE)}>
        <Profile imgSrc={imgSrc} size={size} />
        {showNumber && (
          <>
            <div
              className={clsx(
                CENTER_STYLE,
                'bg-black',
                'opacity-60',
                'rounded-full',
                PROFILE_SIZE_CONFIG[size],
              )}
            />
            <div
              className={clsx(
                CENTER_STYLE,
                'text-white',
                'font-[700]',
                'text-lg',
                'flex',
                'justify-center',
                'items-center',
                'text-center',
              )}
            >
              {percentage}%
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default PercentageProfile

interface PrecentageProps {
  percentage: number
  width?: number | string
  height?: number | string
}
function Percentage({ percentage, width = 65, height = 65 }: PrecentageProps) {
  return (
    <svg viewBox="0 0 36 36" width={width} height={height}>
      <path
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={colors.gray[200]}
        strokeWidth="1"
      />
      <path
        d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={colors.black}
        strokeWidth="1"
        strokeDasharray={`${percentage}, 100`}
      />
    </svg>
  )
}

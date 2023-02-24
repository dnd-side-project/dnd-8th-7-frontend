import clsx from 'clsx'
import { Size, SizeConfig } from './types'

export const SIZE_CONFIG: SizeConfig = {
  sm: 'w-[50px] h-[50px]',
  md: 'w-[100px] h-[100px]',
}
const DEFAULT_IMAGE_SIZE_CONFIG: Record<Size, number> = {
  sm: 41,
  md: 82,
}

export interface Props {
  imgSrc?: string
  size?: Size
}

const DefaultImage = ({ size = 'sm' }: Props) => {
  return (
    <div
      className={clsx(
        'flex',
        'items-end',
        'justify-center',
        'w-full',
        'h-[110%]',
        'bg-gray-200',
      )}
    >
      <img
        src="/assets/images/profile_default.png"
        alt="profile"
        width={DEFAULT_IMAGE_SIZE_CONFIG[size]}
      />
    </div>
  )
}

const Profile = ({ imgSrc = '', size = 'sm' }: Props) => {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        SIZE_CONFIG[size],
        'overflow-hidden',
      )}
    >
      {!imgSrc ? (
        <DefaultImage size={size} />
      ) : (
        <img src={imgSrc} alt="" className="w-full h-full" />
      )}
    </div>
  )
}

export default Profile

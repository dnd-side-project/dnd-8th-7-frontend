import clsx from 'clsx'

interface Props {
  imgSrc?: string
}

const DefaultImage = () => {
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
      <img src="/assets/images/profile_default.png" alt="profile" width={41} />
    </div>
  )
}

const Profile = ({ imgSrc = '' }: Props) => {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'w-[50px]',
        'h-[50px]',
        'overflow-hidden',
      )}
    >
      {!imgSrc ? (
        <DefaultImage />
      ) : (
        <img src={imgSrc} alt="" className="w-full h-full" />
      )}
    </div>
  )
}

export default Profile

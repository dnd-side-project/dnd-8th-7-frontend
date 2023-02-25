import clsx from 'clsx'

import Preparing from '@/components/Preparing'
import { AddIcon, FriendIcon } from '@/components/Icons'

export default function SocialContainer() {
  return (
    <div
      className={clsx(
        'h-[100vh]',
        'flex',
        'flex-col',
        'items-center',
        'bg-gray-50',
        'w-full',
        'px-[20px]',
        'py-[32px]',
      )}
    >
      <div
        className={clsx(
          'flex',
          'justify-between',
          'text-2xl',
          'font-[700]',
          'w-full',
        )}
      >
        <div>
          친구를 팔로우하고
          <br />
          블럭을 공유해보세요 🙋🏻‍♀️
        </div>
        <div className={clsx('flex', 'gap-[16px]')}>
          <AddIcon className={'fill-textGray-50'} />
          <FriendIcon className={'fill-textGray-50'} />
        </div>
      </div>
      <div className={clsx('flex', 'justify-center', 'items-center', 'h-full')}>
        <Preparing />
      </div>
    </div>
  )
}

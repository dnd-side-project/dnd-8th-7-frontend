import clsx from 'clsx'

import Preparing from '@/components/Preparing'

export default function ReportContainer() {
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
          닉네임님의 한 달<br />
          블럭 활동을 모아봤어요 📈
        </div>
      </div>
      <div className={clsx('flex', 'justify-center', 'items-center', 'h-full')}>
        <Preparing />
      </div>
    </div>
  )
}

import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import Loading from '@/components/Loading'

const FULL_SCREEN = ['h-[100vh]', 'w-[100vw]', 'absolute', 'top-0', 'left-0']

interface Props {
  loading?: boolean
  backgroundMask?: boolean
}

export default function LoadingContainer({
  loading = true,
  backgroundMask = false,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      {loading ? (
        <div
          className={clsx(
            FULL_SCREEN,
            'z-20',
            backgroundMask && 'bg-[rgba(0,0,0,0.15)]',
          )}
        >
          <div className={clsx(FULL_SCREEN)}></div>
          <Loading
            className={clsx(
              'w-[80px]',
              'absolute',
              'translate-x-[-50%]',
              'translate-y-[-50%]',
              'top-[50%]',
              'left-[50%]',
              'z-21',
            )}
          />
        </div>
      ) : (
        children
      )}
    </>
  )
}

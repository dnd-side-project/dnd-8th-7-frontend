import Loading from '@/components/Loading'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const FULL_SCREEN = ['h-[100vh]', 'w-[100vw]', 'absolute', 'top-0', 'left-0']

interface Props {
  loading?: boolean
}

export default function LoadingContainer({
  loading = true,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      {loading ? (
        <div className={clsx(FULL_SCREEN, 'z-20')}>
          <div className={clsx(FULL_SCREEN, 'bg-black', 'opacity-40')}></div>
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

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { LockIcon } from '../Icons'

export default function Secret({ children }: PropsWithChildren) {
  return (
    <div className={clsx('text-red', 'flex', 'items-center')}>
      <LockIcon className={clsx('fill-red', 'mr-[8px]')} />
      <div>{children}</div>
    </div>
  )
}

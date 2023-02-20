import { PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

import Button, { type ButtonProps } from '@/components/Button'

interface Props {
  buttonText?: string
  button?: ReactNode
  buttonProps?: ButtonProps
}

export default function BottomButtonLayout({
  children,
  buttonText,
  buttonProps,
  button,
}: PropsWithChildren<Props>) {
  return (
    <div className={clsx('flex', 'flex-col', 'h-screen', 'relative')}>
      <div className={clsx('flex-1', 'overflow-y-auto', 'pb-[90px]')}>
        {children}
      </div>
      <div>
        <div
          className={clsx('absolute', 'bottom-0', 'h-[90px]', 'w-full')}
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.09147408963585435) 7%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%)',
          }}
        />
        <div className={clsx('absolute', 'bottom-0', 'w-full', 'p-[20px]')}>
          {button || <Button {...buttonProps}>{buttonText}</Button>}
        </div>
      </div>
    </div>
  )
}

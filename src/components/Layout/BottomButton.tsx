import { PropsWithChildren } from 'react'
import clsx from 'clsx'

import Button, { type ButtonProps } from '@/components/Button'

interface Props {
  buttonText?: string
  buttonProps?: ButtonProps
}

export default function BottomButtonLayout({
  children,
  buttonText,
  buttonProps,
}: PropsWithChildren<Props>) {
  return (
    <div className={clsx('flex', 'flex-col', 'h-screen', 'relative')}>
      <div className={clsx('flex-1', 'overflow-y-auto', 'pb-[90px]')}>
        {children}
      </div>
      <div>
        <div
          className={clsx(
            'absolute',
            'bottom-0',
            'h-[90px]',
            'w-full',
            'bg-bottom-button-layout',
          )}
        />
        <div className={clsx('absolute', 'bottom-0', 'w-full', 'p-[20px]')}>
          <Button {...buttonProps}>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}

import clsx from 'clsx'
import { useState } from 'react'

export interface Props {
  defaultValue?: boolean
  onChange?: (value: boolean) => void
}

export default function Switch({ defaultValue = false, onChange }: Props) {
  const [active, setActive] = useState(defaultValue)

  const handleClick = () => {
    setActive(!active)
    onChange?.(!active)
  }

  return (
    <div
      className={clsx(
        'w-[40px]',
        'h-[20px]',
        'rounded-[20px]',
        'flex',
        'items-center',
        'px-[3px]',
        'py-[2px]',
        'transition-all',
        active ? 'bg-red' : 'bg-gray-300',
      )}
      onClick={handleClick}
    >
      <div
        className={clsx(
          'w-[16px]',
          'h-[16px]',
          'bg-white',
          'rounded-[99px]',
          'transition-all',
          active ? 'translate-x-[18px]' : 'translate-x-[0px]',
          'ease-in-out',
        )}
      ></div>
    </div>
  )
}

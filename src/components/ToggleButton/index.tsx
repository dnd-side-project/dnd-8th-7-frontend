import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

export type OnClick = ({
  selected,
  value,
}: {
  selected: boolean
  value: string
}) => void

interface Props {
  name: string
  value: string
  defaultChecked?: boolean
  onClick?: OnClick
}

const ToggleButton = ({
  name,
  value,
  defaultChecked = false,
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    onClick?.({ selected: checked, value })
  }

  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer hidden"
        onChange={handleChange}
      />
      <span
        className={clsx(
          'flex',
          'w-fit',
          'justify-center',
          'items-center',
          'cursor-pointer',
          'rounded-sm',
          'select-none',
          'px-3',
          'py-1',
          'bg-gray-100',
          'text-gray-300',
          'peer-checked:bg-red',
          'peer-checked:text-white',
        )}
      >
        {children}
      </span>
    </label>
  )
}

export default ToggleButton

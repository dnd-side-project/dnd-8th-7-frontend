import React from 'react'
import clsx from 'clsx'

export type OnChange = ({
  selected,
  value,
}: {
  selected: boolean
  value: string
}) => void

interface Props {
  name: string
  value?: string
  defaultChecked?: boolean
  onChange?: OnChange
}

const CHECK_BOX_STYLE = 'flex w-[22px] h-[22px] rounded-sm bg-white'

const TaskCheckBox = ({ value, name, defaultChecked, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    onChange?.({ selected: checked, value })
  }

  return (
    <label className="flex items-center cursor-pointer">
      <input
        id={name}
        name={name}
        value={value}
        type="checkbox"
        className="peer hidden"
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <span className={clsx(CHECK_BOX_STYLE, 'peer-checked:hidden')} />
      <span
        className={clsx(
          CHECK_BOX_STYLE,
          'transition',
          'duration-200',
          'hidden',
          'peer-checked:block',
        )}
      >
        <span className="w-full h-full flex items-center justify-center">
          <img src="/assets/icons/task_check.svg" alt="" draggable="false" />
        </span>
      </span>
    </label>
  )
}

export default TaskCheckBox

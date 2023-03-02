import CheckBox from '@/components/CheckBox'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  values: {
    defaultChecked?: boolean
    title: string
  }[]
  onTotalCheckChange?: (checked: boolean) => void
}

const TEXT_STYLE = 'text-[14px] leading-[140%]'

export default function CheckBoxList({ values, onTotalCheckChange }: Props) {
  const [totalChecked, setTotalChecked] = useState(false)
  const [checked, setChecked] = useState(values.map(() => false))

  const handleChange = (value: boolean, idx: number) => {
    const newChecked = [...checked]
    newChecked[idx] = value
    setChecked(newChecked)

    const newTotalChecked = newChecked.reduce((res, cur) => res && cur, true)
    if (newTotalChecked !== totalChecked) {
      onTotalCheckChange?.(newTotalChecked)
    }
    setTotalChecked(newTotalChecked)
  }

  const handleTotalClick = () => {
    if (totalChecked) {
      setChecked(values.map(() => false))
    } else {
      setChecked(values.map(() => true))
    }
    setTotalChecked(!totalChecked)
    onTotalCheckChange?.(!totalChecked)
  }

  return (
    <>
      <div className={clsx('flex', 'gap-[8px]', 'font-bold', 'mb-[25px]')}>
        <CheckBox
          shape="rectangle"
          checked={totalChecked}
          onClick={handleTotalClick}
        />
        <div>전체 동의</div>
      </div>

      <div
        className={clsx(
          'flex',
          'flex-col',
          'gap-[10px]',
          'text-black',
          TEXT_STYLE,
        )}
      >
        {values.map(({ defaultChecked, title }, idx) => (
          <div key={idx} className={clsx('flex', 'gap-[8px]', 'items-center')}>
            <CheckBox
              shape="rectangle"
              defaultChecked={defaultChecked}
              checked={checked[idx]}
              onChange={(value) => handleChange(value, idx)}
            />
            <div>{title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

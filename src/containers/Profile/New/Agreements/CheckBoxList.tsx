import CheckBox from '@/components/CheckBox'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  values: {
    defaultChecked?: boolean
    title: string
  }[]
  onTotalCheckChange: (checked: boolean) => void
}

const TEXT_STYLE = 'text-[14px] leading-[140%]'

export default function CheckBoxList({ values, onTotalCheckChange }: Props) {
  const [totalChecked, setTotalChecked] = useState(false)
  const [checked, setChecked] = useState(0)

  const handleChange = (value: boolean, idx: number) => {
    const newChecked = value ? (1 << idx) | checked : ~(1 << idx) & checked
    setChecked(newChecked)

    const newTotalChecked = newChecked === (1 << values.length) - 1
    setTotalChecked(newTotalChecked)
    onTotalCheckChange(newTotalChecked)
  }

  const handleTotalClick = () => {
    if (totalChecked) {
      setChecked(0)
    } else {
      setChecked((1 << values.length) - 1)
    }
    setTotalChecked(!totalChecked)
    onTotalCheckChange(!totalChecked)
  }

  return (
    <>
      <div className={clsx('flex', 'gap-[8px]', 'font-bold', 'mb-[25px]')}>
        <CheckBox checked={totalChecked} onClick={handleTotalClick} />
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
              defaultChecked={defaultChecked}
              checked={!!((checked >> idx) & 1)}
              onChange={(value) => handleChange(value, idx)}
            />
            <div>{title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

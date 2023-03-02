import { ComponentPropsWithoutRef, ChangeEvent } from 'react'
import {
  CheckBoxOnCircleIcon,
  CheckBoxOffCircleIcon,
  CheckBoxOnRectIcon,
  CheckBoxOffRectIcon,
} from '@/components/Icons'
import type { Shape, ShapeConfig } from './types'

const CheckBoxType: ShapeConfig = {
  circle: {
    off: <CheckBoxOffCircleIcon />,
    on: <CheckBoxOnCircleIcon />,
  },
  rectangle: {
    off: <CheckBoxOffRectIcon />,
    on: <CheckBoxOnRectIcon />,
  },
}

interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void
  shape?: Shape
}

export default function CheckBox({
  onChange,
  shape = 'circle',
  ...props
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    onChange?.(checked, e)
  }

  return (
    <label>
      <input
        {...props}
        type="checkbox"
        className="peer hidden"
        onChange={handleChange}
      />
      <div className="peer-checked:hidden">{CheckBoxType[shape].off}</div>
      <div className="hidden peer-checked:block">{CheckBoxType[shape].on}</div>
    </label>
  )
}

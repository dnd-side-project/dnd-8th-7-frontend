import clsx from 'clsx'
import { ComponentProps, useState } from 'react'

type Value = string | string[] | undefined
interface Props {
  defaultColors?: string[]
  defaultPicked?: Value
  multiple?: boolean
  onChange?: (color: Value) => void
}

export default function ColorPicker({
  defaultColors = [],
  defaultPicked,
  multiple = false,
  onChange,
}: Props) {
  const [pickedColor, setPickedColor] = useState<Value>(
    defaultPicked || (multiple ? [] : undefined),
  )

  const handleColorClick = (color: string) => {
    if (multiple) {
      let newState = Array.isArray(pickedColor) ? [...pickedColor] : [color]
      const idx = newState.indexOf(color)
      if (idx !== -1) {
        newState = [...newState.slice(0, idx), ...newState.slice(idx + 1)]
      } else {
        newState = Array.isArray(pickedColor)
          ? [...pickedColor, color]
          : [color]
      }
      setPickedColor(newState)
      onChange?.(newState)
    } else {
      onChange?.(color)
      setPickedColor(color)
    }
  }

  return (
    <div className={clsx('flex', 'gap-[10px]')}>
      {defaultColors?.map((color) => (
        <Color
          key={color}
          color={color}
          onClick={() => handleColorClick(color)}
          picked={
            multiple ? pickedColor?.includes(color) : pickedColor === color
          }
        />
      ))}
    </div>
  )
}

interface ColorProps extends ComponentProps<'div'> {
  color: string
  picked?: boolean
}
function Color({ color, picked, ...props }: ColorProps) {
  return (
    <div
      {...props}
      className={clsx(
        'w-[34px]',
        'h-[34px]',
        'flex',
        'justify-center',
        'items-center',
        'box-border',
        'rounded-[99px]',
        { 'border-[2px] border-gray-200': picked },
      )}
    >
      <div
        className={clsx('w-[24px]', 'h-[24px]', 'rounded-[99px]')}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

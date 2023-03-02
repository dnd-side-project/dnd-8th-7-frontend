import clsx from 'clsx'
import { ComponentProps, useState } from 'react'

type Value = string
interface Props {
  defaultColors?: string[]
  defaultPicked?: Value
  onChange?: (color: string) => void
}

export default function ColorPicker({
  defaultColors = [],
  defaultPicked,
  onChange,
}: Props) {
  const [pickedColor, setPickedColor] = useState<Value | undefined>(
    defaultPicked,
  )

  const handleColorClick = (color: string) => {
    onChange?.(color)
    setPickedColor(color)
  }

  return (
    <div className={clsx('flex', 'gap-[10px]')}>
      {defaultColors?.map((color) => (
        <Color
          key={color}
          color={color}
          onClick={() => handleColorClick(color)}
          picked={pickedColor === color}
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

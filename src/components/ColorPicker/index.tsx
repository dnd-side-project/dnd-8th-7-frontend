import clsx from 'clsx'
import { ComponentProps, useState } from 'react'

type Value = string
interface Props {
  defaultColors?: string[]
  defaultPicked?: Value
  onChange?: (backgroundColor: string) => void
}

export default function ColorPicker({
  defaultColors = [],
  defaultPicked,
  onChange,
}: Props) {
  const [pickedColor, setPickedColor] = useState<Value | undefined>(
    defaultPicked,
  )

  const handleColorClick = (backgroundColor: string) => {
    onChange?.(backgroundColor)
    setPickedColor(backgroundColor)
  }

  return (
    <div className={clsx('flex', 'gap-[10px]')}>
      {defaultColors?.map((backgroundColor) => (
        <Color
          key={backgroundColor}
          backgroundColor={backgroundColor}
          onClick={() => handleColorClick(backgroundColor)}
          picked={pickedColor === backgroundColor}
        />
      ))}
    </div>
  )
}

interface ColorProps extends ComponentProps<'div'> {
  backgroundColor: string
  picked?: boolean
}
function Color({ backgroundColor, picked, ...props }: ColorProps) {
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
        style={{ backgroundColor: backgroundColor }}
      />
    </div>
  )
}

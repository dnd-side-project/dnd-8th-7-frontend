import { ComponentPropsWithoutRef, ChangeEvent } from 'react'
import { CheckBoxOnIcon, CheckBoxOffIcon } from '@/components/Icons'

interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  onChange?: (value: boolean, e: ChangeEvent<HTMLInputElement>) => void
}

export default function CheckBox({
  onChange,
  defaultChecked,
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
      <div className="peer-checked:hidden">
        <CheckBoxOffIcon />
      </div>
      <div className="hidden peer-checked:block">
        <CheckBoxOnIcon />
      </div>
    </label>
  )
}

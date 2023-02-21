import CheckBoxOnIcon from '../Icons/CheckBoxOnIcon'
import CheckBoxOffIcon from '../Icons/CheckBoxOffIcon'
import { MouseEvent, ComponentPropsWithoutRef, useState } from 'react'

interface Props
  extends Omit<
    ComponentPropsWithoutRef<'div'>,
    'value' | 'defaultChecked' | 'onChange'
  > {
  defaultChecked?: boolean
  onChange?: (value: boolean) => void
}

export default function CheckBox({
  onChange,
  defaultChecked = false,
  ...props
}: Props) {
  const [activeStatus, setActiveStatus] = useState(defaultChecked)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    props?.onClick?.(e)
    const newStatus = !activeStatus
    onChange?.(newStatus)
    setActiveStatus(newStatus)
  }

  return (
    <div {...props} onClick={handleClick}>
      {activeStatus ? <CheckBoxOnIcon /> : <CheckBoxOffIcon />}
    </div>
  )
}

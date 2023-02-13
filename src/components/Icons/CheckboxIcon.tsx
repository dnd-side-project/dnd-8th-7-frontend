import clsx from 'clsx'
import CheckBox from 'public/assets/icons/check_box.svg'
import { SvgProps } from '@/types/svg'

const CheckboxIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <CheckBox
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default CheckboxIcon

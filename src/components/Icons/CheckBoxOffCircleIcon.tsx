import clsx from 'clsx'
import CheckBoxOff from 'public/assets/icons/checkbox_off_circle.svg'
import { SvgProps } from '@/types/svg'

const CheckBoxOffCircleIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <CheckBoxOff
        width={width}
        height={height}
        className={clsx(className)}
        {...rest}
      />
    </i>
  )
}

export default CheckBoxOffCircleIcon

import clsx from 'clsx'
import CheckBoxOff from 'public/assets/icons/checkbox_off_rect.svg'
import { SvgProps } from '@/types/svg'

const CheckBoxOffRectIcon = ({
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

export default CheckBoxOffRectIcon

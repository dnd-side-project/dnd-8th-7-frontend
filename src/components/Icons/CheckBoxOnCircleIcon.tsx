import clsx from 'clsx'
import CheckBoxOn from 'public/assets/icons/checkbox_on_circle.svg'
import { SvgProps } from '@/types/svg'

const CheckBoxOnCircleIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <CheckBoxOn
        width={width}
        height={height}
        className={clsx(className)}
        {...rest}
      />
    </i>
  )
}

export default CheckBoxOnCircleIcon

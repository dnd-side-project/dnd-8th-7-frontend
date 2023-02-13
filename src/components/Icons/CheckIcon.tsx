import clsx from 'clsx'
import Check from 'public/assets/icons/check.svg'
import { SvgProps } from '@/types/svg'

const CheckIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Check
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default CheckIcon

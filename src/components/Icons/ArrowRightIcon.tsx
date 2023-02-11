import clsx from 'clsx'
import ArrowRight from 'public/assets/icons/arrow_right.svg'
import { SvgProps } from '@/types/svg'

const ArrowRightIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <ArrowRight
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ArrowRightIcon

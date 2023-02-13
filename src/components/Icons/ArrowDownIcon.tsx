import clsx from 'clsx'
import ArrowDown from 'public/assets/icons/arrow_down.svg'
import { SvgProps } from '@/types/svg'

const ArrowDownIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <ArrowDown
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ArrowDownIcon

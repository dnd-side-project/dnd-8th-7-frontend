import clsx from 'clsx'
import ArrowUp from 'public/assets/icons/arrow_up.svg'
import { SvgProps } from '@/types/svg'

const ArrowUpIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <ArrowUp
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ArrowUpIcon

import clsx from 'clsx'
import MoreHorizontal from 'public/assets/icons/more_horiz.svg'
import { SvgProps } from '@/types/svg'

const MoreHorizontalIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <MoreHorizontal
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default MoreHorizontalIcon

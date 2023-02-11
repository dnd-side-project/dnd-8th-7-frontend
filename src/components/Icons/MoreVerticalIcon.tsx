import clsx from 'clsx'
import MoreVertical from 'public/assets/icons/more_vert.svg'
import { SvgProps } from '@/types/svg'

const MoreVerticalIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <MoreVertical
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default MoreVerticalIcon

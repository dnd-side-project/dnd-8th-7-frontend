import clsx from 'clsx'
import Replay from 'public/assets/icons/replay.svg'
import { SvgProps } from '@/types/svg'

const ReplayIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Replay
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ReplayIcon

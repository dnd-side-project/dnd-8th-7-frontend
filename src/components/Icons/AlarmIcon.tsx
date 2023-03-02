import clsx from 'clsx'
import Alarm from 'public/assets/icons/alarm.svg'
import { SvgProps } from '@/types/svg'

const AlarmIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Alarm
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default AlarmIcon

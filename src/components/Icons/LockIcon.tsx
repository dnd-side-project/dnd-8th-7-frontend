import clsx from 'clsx'
import Lock from 'public/assets/icons/lock.svg'
import { SvgProps } from '@/types/svg'

const LockIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Lock
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default LockIcon

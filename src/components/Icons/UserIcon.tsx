import clsx from 'clsx'
import User from 'public/assets/icons/user.svg'
import { SvgProps } from '@/types/svg'

const UserIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <User
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default UserIcon

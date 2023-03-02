import clsx from 'clsx'
import Friend from 'public/assets/icons/friend.svg'
import { SvgProps } from '@/types/svg'

const FriendIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Friend
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default FriendIcon

import clsx from 'clsx'
import Favorite from 'public/assets/icons/favorite.svg'
import { SvgProps } from '@/types/svg'

const FavoriteIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Favorite
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default FavoriteIcon

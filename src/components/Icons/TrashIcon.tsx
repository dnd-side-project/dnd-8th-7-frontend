import clsx from 'clsx'
import Trash from 'public/assets/icons/trash.svg'
import { SvgProps } from '@/types/svg'

const TrashIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Trash
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default TrashIcon

import clsx from 'clsx'
import Edit from 'public/assets/icons/edit.svg'
import { SvgProps } from '@/types/svg'

const EditIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Edit
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default EditIcon

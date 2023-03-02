import clsx from 'clsx'
import Add from 'public/assets/icons/add.svg'
import { SvgProps } from '@/types/svg'

const AddIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Add
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default AddIcon

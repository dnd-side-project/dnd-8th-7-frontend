import clsx from 'clsx'
import PlusCircle from 'public/assets/icons/plus_circle.svg'
import { SvgProps } from '@/types/svg'

const PlusCircleIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <PlusCircle
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default PlusCircleIcon

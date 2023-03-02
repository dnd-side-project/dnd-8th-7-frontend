import clsx from 'clsx'
import ArrowLeft from 'public/assets/icons/arrow_left.svg'
import { SvgProps } from '@/types/svg'

const ArrowLeftIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <ArrowLeft
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ArrowLeftIcon

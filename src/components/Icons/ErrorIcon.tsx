import clsx from 'clsx'
import Error from 'public/assets/icons/error.svg'
import { SvgProps } from '@/types/svg'

const ErrorIcon = ({
  alt = '',
  className = '',
  width = 20,
  height = 20,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Error
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ErrorIcon

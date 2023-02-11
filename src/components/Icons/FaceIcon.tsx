import clsx from 'clsx'
import Face from 'public/assets/icons/face.svg'
import { SvgProps } from '@/types/svg'

const FaceIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Face
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default FaceIcon

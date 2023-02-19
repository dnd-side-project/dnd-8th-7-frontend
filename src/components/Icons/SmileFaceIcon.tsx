import clsx from 'clsx'
import SmileFace from 'public/assets/icons/smile_face.svg'
import { SvgProps } from '@/types/svg'

const SmileFaceIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <SmileFace
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default SmileFaceIcon

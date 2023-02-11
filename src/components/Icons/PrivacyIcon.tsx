import clsx from 'clsx'
import Privacy from 'public/assets/icons/privacy.svg'
import { SvgProps } from '@/types/svg'

const PrivacyIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Privacy
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default PrivacyIcon

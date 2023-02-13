import clsx from 'clsx'
import Settings from 'public/assets/icons/settings.svg'
import { SvgProps } from '@/types/svg'

const SettingsIcon = ({
  alt = '',
  className = '',
  width = 20,
  height = 20,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Settings
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default SettingsIcon

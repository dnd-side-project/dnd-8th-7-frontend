import clsx from 'clsx'
import DarkProfile from 'public/assets/icons/dark_profile.svg'
import { SvgProps } from '@/types/svg'

const DarkProfileIcon = ({
  alt = '',
  className = '',
  width = 100,
  height = 100,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <DarkProfile
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default DarkProfileIcon

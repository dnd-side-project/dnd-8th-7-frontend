import clsx from 'clsx'
import Exit from 'public/assets/icons/exit.svg'
import { SvgProps } from '@/types/svg'

const ExitIcon = ({
  alt = '',
  className = '',
  width = 24,
  height = 24,
  ...rest
}: SvgProps) => {
  return (
    <i role="presentation" aria-label={alt}>
      <Exit
        width={width}
        height={height}
        className={clsx('fill-black', className)}
        {...rest}
      />
    </i>
  )
}

export default ExitIcon

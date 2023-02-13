import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export const colorOptions = ['white', 'gray', 'black'] as const
export const sizeOptions = ['sm', 'md'] as const
export const fontWeightOptions = ['medium', 'bold'] as const

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size?: (typeof sizeOptions)[number]
  color?: (typeof colorOptions)[number]
  fontWeight?: (typeof fontWeightOptions)[number]
  disabled?: boolean
}

const FONT_WEIGHT_CONFIG = {
  medium: 'font-medium',
  bold: 'font-bold',
}

const COLOR_CONFIG = {
  white: 'bg-white text-textGray-100',
  gray: 'bg-gray-100 text-textGray-100',
  black: 'bg-black text-white',
}

const SIZE_CONFIG = {
  sm: 'px-3 py-1 w-fit rounded-sm',
  md: 'px-8 py-[13px] w-full rounded-lg',
}

const Button = ({
  type = 'button',
  color = 'black',
  disabled = false,
  children,
  size = 'md',
  fontWeight = 'medium',
  className,
  ...rest
}: PropsWithChildren<Props>) => {
  const { onClick } = rest

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!!disabled}
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'text-lg',
        FONT_WEIGHT_CONFIG[fontWeight],
        COLOR_CONFIG[color],
        SIZE_CONFIG[size],
        className,
        {
          'disabled:text-textGray-50 disabled:bg-gray-100': color === 'black',
        },
      )}
    >
      {children}
    </button>
  )
}

export default Button

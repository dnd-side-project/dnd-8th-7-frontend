import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import type {
  Size,
  Color,
  FontWeight,
  Rounded,
  ColorConfig,
  RoundedConfig,
  FontWeightConfig,
  SizeConfig,
} from './types'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: Size
  color?: Color
  fontWeight?: FontWeight
  rounded?: Rounded
  disabled?: boolean
  outlined?: boolean
}

const SIZE_CONFIG: SizeConfig = {
  sm: 'px-3 py-1 w-fit',
  md: 'px-8 py-[13px] w-full',
}

const COLOR_CONFIG: ColorConfig = {
  red: 'bg-red text-white',
  white: 'bg-white text-textGray-100',
  gray: 'bg-gray-100 text-textGray-100',
  black: 'bg-black text-white',
}

const ROUNDED_CONFIG: RoundedConfig = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
}

const FONT_WEIGHT_CONFIG: FontWeightConfig = {
  medium: 'font-medium',
  bold: 'font-bold',
}

const Button = ({
  type = 'button',
  color = 'black',
  disabled = false,
  children,
  size = 'md',
  rounded = 'md',
  fontWeight = 'medium',
  outlined = false,
  className,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
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
        'text-base',
        ROUNDED_CONFIG[rounded],
        FONT_WEIGHT_CONFIG[fontWeight],
        COLOR_CONFIG[color],
        SIZE_CONFIG[size],
        className,
        {
          'disabled:text-textGray-50 disabled:bg-gray-100': color === 'black',
        },
        {
          'border border-gray-400': outlined,
        },
      )}
    >
      {children}
    </button>
  )
}

export default Button

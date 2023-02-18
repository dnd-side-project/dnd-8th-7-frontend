import {
  colorOptions,
  sizeOptions,
  fontWeightOptions,
  roundedOptions,
} from './consts'

type Config<T extends readonly string[]> = {
  [key in T[number]]: string
}

type ArrayToUnion<T extends readonly string[]> = T[number]

export type Color = ArrayToUnion<typeof colorOptions>
export type Size = ArrayToUnion<typeof sizeOptions>
export type FontWeight = ArrayToUnion<typeof fontWeightOptions>
export type Rounded = ArrayToUnion<typeof roundedOptions>

export type ColorConfig = Config<typeof colorOptions>
export type SizeConfig = Config<typeof sizeOptions>
export type FontWeightConfig = Config<typeof fontWeightOptions>
export type RoundedConfig = Config<typeof roundedOptions>

import { ArrayToUnion, Config } from '@/types/common.type'
import {
  colorOptions,
  sizeOptions,
  fontWeightOptions,
  roundedOptions,
} from './consts'

export type Color = ArrayToUnion<typeof colorOptions>
export type Size = ArrayToUnion<typeof sizeOptions>
export type FontWeight = ArrayToUnion<typeof fontWeightOptions>
export type Rounded = ArrayToUnion<typeof roundedOptions>

export type ColorConfig = Config<typeof colorOptions>
export type SizeConfig = Config<typeof sizeOptions>
export type FontWeightConfig = Config<typeof fontWeightOptions>
export type RoundedConfig = Config<typeof roundedOptions>

import { sizeOptions } from './consts'

type Config<T extends readonly string[]> = {
  [key in T[number]]: string
}

type ArrayToUnion<T extends readonly string[]> = T[number]

export type Size = ArrayToUnion<typeof sizeOptions>

export type SizeConfig = Config<typeof sizeOptions>

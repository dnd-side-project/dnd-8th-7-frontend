import { ArrayToUnion, Config } from '@/types/common.type'
import { statusOptions } from './consts'

export type Status = ArrayToUnion<typeof statusOptions>
export type StatusConfig = Config<typeof statusOptions>

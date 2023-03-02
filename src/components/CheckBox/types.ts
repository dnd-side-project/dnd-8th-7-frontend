import type { ArrayToUnion } from '@/types/common.type'
import type { ReactNode } from 'react'
import { shapeOptions } from './consts'

export type Shape = ArrayToUnion<typeof shapeOptions>

export type ShapeConfig = Record<Shape, { on: ReactNode; off: ReactNode }>

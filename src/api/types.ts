import { BlockDetail, DailyBlock } from '@/types/block'

export type GetDailyBlocksOnWeekParams = {
  date: string
}
export type GetDailyBlocksOnWeekResponse = {
  user: string
  dailyBlocks: Array<DailyBlock>
}

export type GetDayBlocksParams = {
  date: string
}
export type GetDayBlocksResponse = {
  date: string
  totalBlock: number
  totalTask: number
  reviewId?: number
  blocks: Array<BlockDetail>
}

export type CreateBlockParams = {
  date: string
  blockTitle: string
  emoticon: string
  blockColor: string
  isSecret: boolean
}
export type CreateBlockResponse = {
  blockId: number
}

export type CreateDailyReviewParams = {
  date: string
  emoticon: string
  review: string
  isSecret: boolean
}
export type CreateDailyReviewResponse = {
  reviewId: number
}

export type DeleteBlockParams = { blockId: number }
export type DeleteBlockResponse = unknown

export type CreateTaskInBlockParams = {
  blockId: number
  content: string
}
export type CreateTaskInBlockResponse = {
  blockId: number
  taskId: number
  content: string
}
export type UpdateTaskInBlockParams = {
  taskId: number
  content: string
}
export type UpdateTaskInBlockResponse = {
  taskId: number
  content: string
}
export type DeleteTaskInBlockParams = {
  taskId: number
}
export type DeleteTaskInBlockResponse = unknown

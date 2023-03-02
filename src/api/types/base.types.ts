import { BlockDetail, DailyBlock } from '@/types/block'
import { UserProfile } from '@/types/common.type'

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

export type GetSingleBlockParams = {
  blockId: number
}

export type GetSingleBlockResponse = {
  date: string
  title: string
  emoticon: string
  blockColor: string
  isSecret: boolean
}

export type GetSavedBlocksResponse = Omit<BlockDetail, 'sumOfDoneTask'>[]

export type SaveBlockParams = {
  blockId: number
}

export type CreateBlockParams = {
  date: string
  title: string
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

export type UpdateBlockParams = {
  blockId: number
  title: string
  emoticon: string
  blockColor: string
  isSecret: boolean
}

export type UpdateBlockResponse = {
  title: string
  emoticon: string
  blockColor: string
  isSecret: boolean
}

export type UpdateMyProfileParams = UserProfile
export type UpdateMyProfileResponse = UserProfile

export type GetMyProfileParams = Record<string, never>
export type GetMyProfileResponse = UserProfile

export type DeleteSavedBlockParams = { blockId: number }
export type DeleteSavedBlockResponse = Record<string, never>

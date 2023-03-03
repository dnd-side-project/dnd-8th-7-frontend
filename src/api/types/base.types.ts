import { BlockDetail, DailyBlock } from '@/types/block'
import { UserProfile } from '@/types/common.type'

export type GetDailyBlocksOnWeekParams = {
  date: string
}
export type GetDailyBlocksOnWeekResponse = Array<DailyBlock>

export type GetDayBlocksParams = {
  date: string
}
export type GetDayBlocksResponse = {
  date: string
  numOfTotalBlocks: number
  numOfTotalTasks: number
  reviewId?: number | null
  blocks: Array<BlockDetail>
}

export type GetSingleBlockParams = {
  blockId: number
}

export type GetSingleBlockResponse = {
  date: string
  title: string
  emoji: string
  backgroundColor: string
  isSecret: boolean
}

export type GetSavedBlocksResponse = Omit<BlockDetail, 'numOfDoneTask'>[]

export type SaveBlockParams = {
  blockId: number
}

export type CreateBlockParams = {
  date: string
  title: string
  emoji: string
  backgroundColor: string
  isSecret: boolean
}
export type CreateBlockResponse = {
  blockId: number
}

export type CreateDailyReviewParams = {
  date: string
  emoji: string
  review: string
  isSecret: boolean
}
export type CreateDailyReviewResponse = {
  reviewId: number
}
export type GetDailyReviewParams = { reviewId: number }
export type GetDailyReviewResponse = CreateDailyReviewParams

export type UpdateDailyReviewParams = GetDailyReviewParams &
  GetDailyReviewResponse
export type UpdateDailyReviewResponse = Record<string, never>

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
  emoji: string
  backgroundColor: string
  isSecret: boolean
}

export type UpdateBlockResponse = {
  title: string
  emoji: string
  backgroundColor: string
  isSecret: boolean
}

export type UpdateTaskStatusParams = { taskId: number }

export type UpdateMyProfileParams = UserProfile
export type UpdateMyProfileResponse = UserProfile

export type GetMyProfileParams = Record<string, never>
export type GetMyProfileResponse = UserProfile

export type DeleteSavedBlockParams = { blockId: number }
export type DeleteSavedBlockResponse = Record<string, never>

export type LoadSavedBlockParams = { date: string; blockIds: number[] }
export type LoadSavedBlockResponse = Record<string, never>

/** 기타 */
export type GetMyDailyBlockMetricParams = { date: string }
export type GetMyDailyBlockMetricResponse = {
  date: string
  user: UserProfile
  numOfBlocks: number
  numOfTasks: number
  numOfdoneTasks: number
  percentageOfDoneTasks: number
}

export type CheckUniqueNicknameParams = { nickname: string }
export type CheckUniqueNicknameResponse = { isDuplicated: boolean }

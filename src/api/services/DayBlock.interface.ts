import * as Type from '@/api/types/base.types'
import { ServiceFunc } from './types'

export default interface DayBlockService {
  /** 메인 */
  getDailyBlocksOnWeek: ServiceFunc<
    Type.GetDailyBlocksOnWeekParams,
    Type.GetDailyBlocksOnWeekResponse
  >
  getDayBlocks: ServiceFunc<Type.GetDayBlocksParams, Type.GetDayBlocksResponse>

  /** 블럭 */
  createBlock: ServiceFunc<Type.CreateBlockParams, Type.CreateBlockResponse>
  deleteBlock: ServiceFunc<Type.DeleteBlockParams, Type.DeleteBlockResponse>
  updateBlock: ServiceFunc<Type.UpdateBlockParams, Type.UpdateBlockResponse>

  /** 저장 블럭 */
  getSavedBlocks: ServiceFunc<never, Type.GetSavedBlocksResponse>
  getSingleBlock: ServiceFunc<
    Type.GetSingleBlockParams,
    Type.GetSingleBlockResponse
  >
  saveBlock: ServiceFunc<Type.SaveBlockParams, Type.CreateBlockResponse>
  deleteSavedBlock: ServiceFunc<
    Type.DeleteSavedBlockParams,
    Type.DeleteSavedBlockResponse
  >
  loadSavedBlock: ServiceFunc<
    Type.LoadSavedBlockParams,
    Type.LoadSavedBlockResponse
  >

  /** 하루 일기 */
  createDailyReview: ServiceFunc<
    Type.CreateDailyReviewParams,
    Type.CreateDailyReviewResponse
  >

  /** 태스크 */
  createTaskInBlock: ServiceFunc<
    Type.CreateTaskInBlockParams,
    Type.CreateTaskInBlockResponse
  >
  updateTaskInBlock: ServiceFunc<
    Type.UpdateTaskInBlockParams,
    Type.UpdateTaskInBlockResponse
  >
  deleteTaskInBlock: ServiceFunc<
    Type.DeleteTaskInBlockParams,
    Type.DeleteTaskInBlockResponse
  >

  /** 프로필 */
  updateMyProfile: ServiceFunc<
    Type.UpdateMyProfileParams,
    Type.UpdateMyProfileResponse
  >
  getMyProfile: ServiceFunc<Type.GetMyProfileParams, Type.GetMyProfileResponse>
}

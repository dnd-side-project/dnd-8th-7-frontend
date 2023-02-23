import { AxiosResponse } from 'axios'
import * as Type from '@/api/types'

type PromiseAxios<T> = Promise<AxiosResponse<T>>
type ServiceFunc<Params, Res> = (params: Params) => PromiseAxios<Res>

export default interface DayBlockService {
  getDailyBlocksOnWeek: ServiceFunc<
    Type.GetDailyBlocksOnWeekParams,
    Type.GetDailyBlocksOnWeekResponse
  >

  getDayBlocks: ServiceFunc<Type.GetDayBlocksParams, Type.GetDayBlocksResponse>

  createBlock: ServiceFunc<Type.CreateBlockParams, Type.CreateBlockResponse>
  deleteBlock: ServiceFunc<Type.DeleteBlockParams, Type.DeleteBlockResponse>

  createDailyReview: ServiceFunc<
    Type.CreateDailyReviewParams,
    Type.CreateDailyReviewResponse
  >

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
}

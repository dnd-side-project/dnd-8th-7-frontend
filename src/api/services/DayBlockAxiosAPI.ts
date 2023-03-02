import API from '@/api/axios'

import DayBlockService from './DayBlock.interface'
import * as Type from '@/api/types/base.types'

export default class DayBlockAxiosAPI implements DayBlockService {
  /** 메인 */
  getDailyBlocksOnWeek(params: Type.GetDailyBlocksOnWeekParams) {
    return API.get<Type.GetDailyBlocksOnWeekResponse>(
      `/api/block/${params.date}`,
    )
  }
  getDayBlocks(params: Type.GetDayBlocksParams) {
    return API.get<Type.GetDayBlocksResponse>(
      `/api/block/detail/${params.date}`,
    )
  }

  /** 블럭 */
  createBlock(params: Type.CreateBlockParams) {
    return API.post<Type.CreateBlockResponse>(`/api/block`, params)
  }
  deleteBlock(params: Type.DeleteBlockParams) {
    return API.delete<Type.DeleteBlockResponse>(`/api/block/${params.blockId}`)
  }
  updateBlock(params: Type.UpdateBlockParams) {
    return API.patch<Type.UpdateBlockResponse>(`/api/block/${params.blockId}`, {
      title: params.title,
      emoticon: params.emoticon,
      blockColor: params.blockColor,
      isSecret: params.isSecret,
    })
  }

  /** 저장 블럭 */
  getSavedBlocks() {
    return API.get<Type.GetSavedBlocksResponse>(`/api/block/save`)
  }
  getSingleBlock(params: Type.GetSingleBlockParams) {
    return API.get<Type.GetSingleBlockResponse>(
      `/api/block/single/${params.blockId}`,
    )
  }
  saveBlock(params: Type.SaveBlockParams) {
    return API.post<Type.CreateBlockResponse>(
      `/api/block/${params.blockId}/save`,
    )
  }
  deleteSavedBlock({ blockId }: Type.DeleteSavedBlockParams) {
    return API.delete(`api/block/${blockId}/save`)
  }
  loadSavedBlock({ date, ...params }: Type.LoadSavedBlockParams) {
    return API.post(`/api/block/load/${date}`, params)
  }

  /** 하루 일기 */
  createDailyReview(params: Type.CreateDailyReviewParams) {
    return API.post<Type.CreateDailyReviewResponse>(`/api/review`, params)
  }

  /** 태스크 */
  createTaskInBlock(params: Type.CreateTaskInBlockParams) {
    return API.post<Type.CreateTaskInBlockResponse>(
      `/api/task/${params.blockId}`,
      { content: params.content },
    )
  }
  updateTaskInBlock(params: Type.UpdateTaskInBlockParams) {
    return API.put<Type.UpdateTaskInBlockResponse>(
      `/api/task/${params.taskId}`,
      params,
    )
  }
  deleteTaskInBlock(params: Type.DeleteTaskInBlockParams) {
    return API.delete<Type.DeleteTaskInBlockResponse>(
      `/api/task/${params.taskId}`,
    )
  }

  /** 프로필 */
  updateMyProfile(params: Type.UpdateMyProfileParams) {
    return API.patch(`/api/user`, params)
  }
  getMyProfile() {
    return API.get<Type.GetMyProfileResponse>(`/api/user`)
  }
}

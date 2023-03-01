import API from '@/api/axios'

import DayBlockService from './DayBlock.interface'
import * as Type from '@/api/types/base.types'

export default class DayBlockAxiosAPI implements DayBlockService {
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

  getSavedBlocks() {
    return API.get<Type.GetSavedBlocksResponse>(`/api/block/save`)
  }

  getSingleBlock(params: Type.GetSingleBlockParams) {
    return API.get<Type.GetSingleBlockResponse>(
      `/api/block/single/${params.blockId}`,
    )
  }

  saveBlock(params: Type.SaveBlockParams) {
    return API.post<Type.CreateBlockResponse>(`/api/block/${params.blockId}`)
  }

  createBlock(params: Type.CreateBlockParams) {
    return API.post<Type.CreateBlockResponse>(`/api/block`, params)
  }

  deleteBlock(params: Type.DeleteBlockParams) {
    return API.delete<Type.DeleteBlockResponse>(`/api/block/${params.blockId}`)
  }

  createDailyReview(params: Type.CreateDailyReviewParams) {
    return API.post<Type.CreateDailyReviewResponse>(`/api/review`, params)
  }

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

  updateBlock(params: Type.UpdateBlockParams) {
    return API.patch<Type.UpdateBlockResponse>(`/api/block/${params.blockId}`, {
      title: params.title,
      emoticon: params.emoticon,
      blockColor: params.blockColor,
      isSecret: params.isSecret,
    })
  }

  deleteTaskInBlock(params: Type.DeleteTaskInBlockParams) {
    return API.delete<Type.DeleteTaskInBlockResponse>(
      `/api/task/${params.taskId}`,
    )
  }
}

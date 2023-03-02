import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GetDayBlocksResponse } from '@/api/types/base.types'
import getItem from '@/utils/getItem'

type State = {
  blockList: GetDayBlocksResponse
}

const INITIAL_STATE: State['blockList'] = {
  date: '',
  totalBlock: 0,
  totalTask: 0,
  reviewId: null,
  blocks: [],
}

type Actions = {
  setBlockList: (data: State['blockList']) => void
  addNewTask: (blockId: number) => void
  updateTask: (blockId: number, taskId: number, content: string) => void
  updateTaskStatus: (blockId: number, taskId: number, isDone: boolean) => void
  deleteTask: (blockId: number, taskId: number) => void
}

const useBlockListStore = create(
  immer<State & Actions>((set) => ({
    blockList: INITIAL_STATE,

    setBlockList: (data) =>
      set((state) => {
        state.blockList = data
      }),

    addNewTask: (blockId) =>
      set(({ blockList: { blocks, totalTask } }) => {
        const { block } = getItem(blocks, blockId)
        const newTask = {
          taskId: block.tasks.length + 1,
          task: '',
          isDone: false,
        }
        block.tasks.push(newTask)
        block.sumOfTask += 1
        totalTask += 1
      }),

    updateTask: (blockId, taskId, content) =>
      set(({ blockList: { blocks } }) => {
        const { task } = getItem(blocks, blockId, taskId)
        task.task = content
      }),

    updateTaskStatus: (blockId, taskId, isDone) =>
      set(({ blockList: { blocks } }) => {
        const { block, task } = getItem(blocks, blockId, taskId)
        task.isDone = isDone
        if (isDone) block.sumOfDoneTask += 1
        else block.sumOfDoneTask -= 1
      }),

    deleteTask: (blockId, taskId) => {
      set(({ blockList: { blocks, totalTask } }) => {
        const { block, taskIndex } = getItem(blocks, blockId, taskId)
        block.tasks.splice(taskIndex, 1)
        block.sumOfTask -= 1
        totalTask -= 1
      })
    },
  })),
)

export default useBlockListStore

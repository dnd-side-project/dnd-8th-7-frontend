import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GetDayBlocksResponse } from '@/api/types/base.types'

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
      set((state) => {
        const blockIndex = state.blockList.blocks.findIndex(
          (block) => block.blockId === blockId,
        )
        state.blockList.blocks[blockIndex].tasks.push({
          taskId: state.blockList.blocks[blockIndex].tasks.length + 1,
          task: '',
          isDone: false,
        })
        state.blockList.blocks[blockIndex].sumOfTask += 1
        state.blockList.totalTask += 1
      }),
    updateTask: (blockId, taskId, content) =>
      set((state) => {
        const blockIndex = state.blockList.blocks.findIndex(
          (block) => block.blockId === blockId,
        )
        const taskIndex = state.blockList.blocks[blockIndex].tasks.findIndex(
          (task) => task.taskId === taskId,
        )
        state.blockList.blocks[blockIndex].tasks[taskIndex].task = content
      }),
    updateTaskStatus: (blockId, taskId, isDone) =>
      set((state) => {
        const blockIndex = state.blockList.blocks.findIndex(
          (block) => block.blockId === blockId,
        )
        const taskIndex = state.blockList.blocks[blockIndex].tasks.findIndex(
          (task) => task.taskId === taskId,
        )
        state.blockList.blocks[blockIndex].tasks[taskIndex].isDone = isDone
        if (isDone) state.blockList.blocks[blockIndex].sumOfDoneTask += 1
        else state.blockList.blocks[blockIndex].sumOfDoneTask -= 1
      }),
    deleteTask: (blockId, taskId) => {
      set((state) => {
        const blockIndex = state.blockList.blocks.findIndex(
          (block) => block.blockId === blockId,
        )
        const taskIndex = state.blockList.blocks[blockIndex].tasks.findIndex(
          (task) => task.taskId === taskId,
        )
        state.blockList.blocks[blockIndex].tasks.splice(taskIndex, 1)
        state.blockList.blocks[blockIndex].sumOfTask -= 1
        state.blockList.totalTask -= 1
      })
    },
  })),
)

export default useBlockListStore

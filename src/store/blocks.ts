import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GetDayBlocksResponse } from '@/api/types/base.types'
import getItem from '@/utils/getItem'

type State = {
  blockList: GetDayBlocksResponse
}

const INITIAL_STATE: State['blockList'] = {
  date: '',
  numOfTotalBlocks: 0,
  numOfTotalTasks: 0,
  reviewId: null,
  blocks: [],
}

type Actions = {
  setBlockList: (data: State['blockList']) => void
  addNewTask: (blockId: number, newTaskId: number) => void
  updateTask: (blockId: number, taskId: number, content: string) => void
  updateTaskStatus: (blockId: number, taskId: number, isDone: boolean) => void
  deleteTask: (blockId: number, taskId: number) => void
  deleteBlock: (blockId: number, numOfTasks: number) => void
}

const useBlockListStore = create(
  immer<State & Actions>((set) => ({
    blockList: INITIAL_STATE,

    setBlockList: (data) =>
      set((state) => {
        state.blockList = data
      }),

    addNewTask: (blockId, newTaskId) =>
      set(({ blockList }) => {
        const { block } = getItem(blockList.blocks, blockId)
        const newTask = {
          taskId: newTaskId,
          task: '',
          isDone: false,
        }
        block.tasks.push(newTask)
        block.numOfTasks += 1
        blockList.numOfTotalTasks += 1
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
        if (isDone) block.numOfDoneTask += 1
        else block.numOfDoneTask -= 1
      }),

    deleteTask: (blockId, taskId) => {
      set(({ blockList }) => {
        const { block, taskIndex } = getItem(blockList.blocks, blockId, taskId)
        block.tasks.splice(taskIndex, 1)
        block.numOfTasks -= 1
        blockList.numOfTotalTasks -= 1
      })
    },

    deleteBlock: (blockId, numOfTasks) => {
      set(({ blockList }) => {
        const { blockIndex } = getItem(blockList.blocks, blockId)
        blockList.blocks.splice(blockIndex, 1)
        blockList.numOfTotalBlocks -= 1
        blockList.numOfTotalTasks -= numOfTasks
      })
    },
  })),
)

export default useBlockListStore

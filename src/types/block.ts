export type DailyBlock = {
  date: string
  backgroundColors: Array<{
    blockId: number
    backgroundColor: string
  }>
}

export type BlockDetail = {
  blockId: number
  backgroundColor: string
  emoji: string
  title: string
  numOfTasks: number
  numOfDoneTask: number
  tasks: Array<Task>
}

export type SavedBlock = Omit<BlockDetail, 'numOfDoneTask'>

export type Task = {
  taskId: number
  task: string
  isDone: boolean
}

export type BlockList = {
  date: string
  numOfTotalBlocks: number
  numOfTotalTasks: number
  reviewId: number | null
  blocks: BlockDetail[]
}

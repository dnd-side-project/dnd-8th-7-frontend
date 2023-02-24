export type DailyBlock = {
  date: string
  color: Array<string>
}

export type BlockDetail = {
  blockId: number
  color: string
  icon: string
  title: string
  sumOfTask: number
  sumOfDoneTask: number
  tasks: Array<Task>
}

export type Task = {
  taskId: number
  task: string
  isDone: boolean
}

export type BlockList = {
  date: string
  totalBlock: number
  totalTask: number
  blocks: BlockDetail[]
}

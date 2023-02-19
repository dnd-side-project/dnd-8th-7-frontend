export type Task = {
  task: string
  isDone: boolean
}

export type Block = {
  color: string | string[]
  icon: string
  blockTitle: string
  sumOfTask: number
  sumOfDoneTask: number
  tasks: Task[]
}

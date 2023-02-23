/** TODO BlockDetail 과 병합 */
export type Block = {
  color: string | string[]
  icon: string
  blockTitle: string
  sumOfTask: number
  sumOfDoneTask: number
  tasks: Task[]
}
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

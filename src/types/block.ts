import { BlockColorType } from '@/constants/block'

export type Task = {
  task: string
  isDone: boolean
}

export type Block = {
  color: BlockColorType
  icon: string
  blockTitle: string
  sumOfTask: number
  sumOfDoneTask: number
  tasks: Task[]
}

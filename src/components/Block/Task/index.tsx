import { useState, useEffect } from 'react'
import clsx from 'clsx'
import TaskCheckBox, { OnChange } from '@/components/TaskCheckBox'
import type { Task as TaskType } from '@/types/block'
import useDebounce from '@/hooks/useDebounce'
import { dayBlockAPI } from '@/api'
import useHttpRequest from '@/hooks/useHttpRequest'
import {
  DeleteTaskInBlockParams,
  UpdateTaskInBlockParams,
  UpdateTaskStatusParams,
} from '@/api/types/base.types'
import useBlockListStore from '@/store/blocks'

const Task = ({
  isDone,
  task,
  taskId,
  blockId,
}: TaskType & { blockId: number }) => {
  const [isChecked, setIsChecked] = useState(isDone)
  const [taskValue, setTaskValue] = useState<string>(task)
  const debouncedValue = useDebounce<string>(taskValue, 500)
  const deleteTaskStore = useBlockListStore((state) => state.deleteTask)
  const updateTaskStore = useBlockListStore((state) => state.updateTask)
  const updateTaskStatusStore = useBlockListStore(
    (state) => state.updateTaskStatus,
  )

  const [, updateTask] = useHttpRequest((params: UpdateTaskInBlockParams) =>
    dayBlockAPI.updateTaskInBlock(params).then(({ data }) => data),
  )
  const [, updateTaskStatus] = useHttpRequest(
    (params: UpdateTaskStatusParams) =>
      dayBlockAPI.updateTaskStatus(params).then(({ data }) => data),
  )
  const [, deleteTask] = useHttpRequest((params: DeleteTaskInBlockParams) =>
    dayBlockAPI.deleteTaskInBlock(params).then(({ data }) => data),
  )

  const handleCheckTask: OnChange = ({ selected }) => {
    setIsChecked(selected)
    updateTaskStatus({ taskId })
    updateTaskStatusStore(blockId, taskId, selected)
  }

  const handleTaskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskValue(e.target.value)
  }

  const handleDelete = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (taskValue.length === 0 && e.key.toLowerCase() === 'backspace') {
      deleteTask({ taskId })
      deleteTaskStore(blockId, taskId)
    }
  }

  useEffect(() => {
    if (!debouncedValue) return
    updateTask({
      taskId,
      content: debouncedValue,
    })
    updateTaskStore(blockId, taskId, debouncedValue)
  }, [debouncedValue])

  return (
    <div className="flex mb-3">
      <TaskCheckBox
        key={taskId}
        name="task"
        defaultChecked={isChecked}
        onChange={handleCheckTask}
      />
      {/* TODO: 추후 공통 Textarea 컴포넌트로 변경 */}
      <textarea
        onChange={handleTaskChange}
        defaultValue={task}
        className={clsx(
          'w-full',
          'bg-transparent',
          'max-h-[20px]',
          'ml-2.5',
          'resize-none',
          'text-white',
          'overflow-hidden',
          {
            'opacity-50': !!isChecked,
          },
        )}
        disabled={!!isChecked}
        onKeyDown={handleDelete}
      />
    </div>
  )
}

export default Task

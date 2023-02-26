import { useState, useEffect } from 'react'
import clsx from 'clsx'
import TaskCheckBox, { OnChange } from '@/components/TaskCheckBox'
import type { Task as TaskType } from '@/types/block'
import useDebounce from '@/hooks/useDebounce'
import { dayBlockAPI } from '@/api'

const Task = ({ isDone, task, taskId }: TaskType) => {
  const [isChecked, setIsChecked] = useState(isDone)
  const [taskValue, setTaskValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(taskValue, 500)

  const handleCheckTask: OnChange = ({ selected }) => {
    setIsChecked(selected)
  }

  const handleTaskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskValue(e.target.value)
  }

  useEffect(() => {
    debouncedValue &&
      dayBlockAPI.updateTaskInBlock({
        taskId,
        content: debouncedValue,
      })
  }, [taskId, debouncedValue])

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
      />
    </div>
  )
}

export default Task

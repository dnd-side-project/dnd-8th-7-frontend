import clsx from 'clsx'
import { useState } from 'react'
import TaskCheckBox, { OnChange } from '@/components/TaskCheckBox'
import type { Task as TaskType } from '@/types/block'

const Task = ({ isDone, task }: TaskType) => {
  const [isChecked, setIsChecked] = useState(isDone)
  const handleCheckTask: OnChange = ({ selected }) => {
    setIsChecked(selected)
  }
  return (
    <TaskCheckBox
      name="task"
      defaultChecked={isChecked}
      onChange={handleCheckTask}
    >
      {/* TODO: 추후 공통 Textarea 컴포넌트로 변경 */}
      <textarea
        defaultValue={task}
        className={clsx(
          'w-full',
          'bg-transparent',
          'max-h-[20px]',
          'ml-2.5',
          'resize-none',
          'text-white',
          'overflow-hidden',
        )}
        disabled={!!isChecked}
      />
    </TaskCheckBox>
  )
}

export default Task

import clsx from 'clsx'
import { useState } from 'react'
import CheckBox, { OnChange } from '@/components/CheckBox'
import { Task } from '@/types/block'

const Todo = ({ isDone, task }: Task) => {
  const [isChecked, setIsChecked] = useState(isDone)
  const handleCheckTodo: OnChange = ({ selected }) => {
    setIsChecked(selected)
  }
  return (
    <div className="">
      <CheckBox
        name="todo"
        defaultChecked={isChecked}
        onChange={handleCheckTodo}
      >
        {/* TODO: 추후 공통 Textarea 컴포넌트로 변경 */}
        <textarea
          defaultValue={task}
          className={clsx(
            'w-full',
            'bg-transparent',
            'max-h-[18px]',
            'ml-2.5',
            'resize-none',
            'text-white',
            'overflow-hidden',
          )}
          disabled={!!isChecked}
        />
      </CheckBox>
    </div>
  )
}

export default Todo

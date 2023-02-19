import clsx from 'clsx'
import { useState } from 'react'
import { MoreVerticalIcon } from '@/components/Icons'
import { BLOCK_COLOR_CONFIG } from '@/constants/block'
import { Block } from '@/types/block'
import AddTodoButton from './AddTodoButton'
import Todo from './Todo'

const BlockIcon = ({ icon }: { icon: string }) => {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'w-[34px]',
        'h-[34px]',
        'rounded-md',
        'bg-white',
      )}
    >
      {icon}
    </div>
  )
}

const TodoBlock = ({
  color,
  icon,
  blockTitle,
  sumOfTask,
  sumOfDoneTask,
  tasks,
}: Block) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleMoreClick = () => {
    setIsExpanded((expanded) => !expanded)
  }

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'rounded-lg',
        'px-2',
        'py-[7px]',
        'text-white',
        BLOCK_COLOR_CONFIG[color],
      )}
    >
      <div className="flex items-center">
        <BlockIcon icon={icon} />

        <div className="flex justify-between text-base ml-2.5 mr-2 w-[calc(100%_-_34px_-_24px)]">
          <p className="font-bold">{blockTitle}</p>
          <p>
            {sumOfDoneTask}/{sumOfTask}
          </p>
        </div>

        <button type="button" className="w-6 h-6" onClick={handleMoreClick}>
          <MoreVerticalIcon className="fill-white" />
        </button>
      </div>

      {isExpanded && (
        <div className="pt-4 pl-3 pr-8">
          <AddTodoButton />
          <div className="mt-6">
            {tasks?.map(({ isDone, task }, idx) => (
              <div key={idx} className="mb-3">
                <Todo isDone={isDone} task={task} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoBlock

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { LockIcon, MoreVerticalIcon } from '@/components/Icons'
import { Block } from '@/types/block'
import useRNListBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNListBottomSheet'
import webBridge from '@/utils/react-native-webview-bridge'
import AddTaskButton from './AddTaskButton'
import Task from './Task'

const LOCKED_TEXT = '쉿! 비밀이에요'

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
  locked = false,
}: Block & { locked?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [open, close] = useRNListBottomSheet('blockMenu')

  const handleMoreClick = () => {
    if (locked) return
    if (isExpanded) {
      setIsExpanded((expanded) => !expanded)
      return
    }
    open(
      {
        title: blockTitle,
        items: [
          { key: 'edit', title: '수정하기' },
          { key: 'delete', title: '삭제하기' },
          {
            key: 'saveBlock',
            title: '블럭 저장하기',
          },
          { key: 'delay', title: '다른 날로 미루기' },
        ],
      },
      {
        onItemClick: (key: string) => {
          handleItemClick(key)
        },
      },
    )
  }

  const handleItemClick = (key: string) => {
    if (key === 'edit') {
      close()
      setIsExpanded((expanded) => !expanded)
    } else close()
  }

  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'rounded-lg',
        'px-2',
        'py-[7px]',
        'text-white',
      )}
      style={{ backgroundColor: color as string }}
    >
      <div className="flex items-center">
        <BlockIcon icon={icon} />

        <div className="flex justify-between text-base font-bold ml-2.5 mr-2 w-[calc(100%_-_34px_-_24px)]">
          {locked ? (
            <div className="flex items-center">
              <LockIcon className="fill-white" width={18} height={18} />
              <p className="ml-2.5">{LOCKED_TEXT}</p>
            </div>
          ) : (
            <p>{blockTitle}</p>
          )}

          <p className="font-medium">
            {sumOfDoneTask}/{sumOfTask}
          </p>
        </div>

        <button type="button" className="w-6 h-6" onClick={handleMoreClick}>
          <MoreVerticalIcon className="!fill-white" />
        </button>
      </div>

      {isExpanded && (
        <div className="pt-4 pl-3 pr-8">
          <AddTaskButton />
          <div className="mt-6">
            {tasks?.map(({ isDone, task }, idx) => (
              <div key={idx} className="mb-3">
                <Task isDone={isDone} task={task} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoBlock

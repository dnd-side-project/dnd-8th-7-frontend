import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { LockIcon, MoreVerticalIcon } from '@/components/Icons'
import type { BlockDetail } from '@/types/block'
import useRNListBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNListBottomSheet'
import webBridge from '@/utils/react-native-webview-bridge'
import AddTaskButton from './AddTaskButton'
import Task from './Task'
import { dayBlockAPI } from '@/api'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { BASE_URL } from '@/constants/urls'
import useHttpRequest from '@/hooks/useHttpRequest'

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

const Block = ({
  blockId,
  color,
  icon,
  title,
  sumOfTask,
  sumOfDoneTask,
  tasks,
  locked = false,
}: BlockDetail & { locked?: boolean; handleDelete?: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [open, close] = useRNListBottomSheet('blockMenu')
  const [, postSaveBlock, isLoading] = useHttpRequest(() =>
    dayBlockAPI.saveBlock({ blockId }).then(({ data }) => data),
  )

  const handleBlockClick = () => {
    setIsExpanded((expanded) => !expanded)
  }

  const handleEditBlock = () => {
    rnWebViewBridge.open({
      key: 'updateBlock',
      url: `${BASE_URL}/blocks/update?blockId=${blockId}`,
    })
    close()
  }

  const handleDeleteBlock = () => {
    dayBlockAPI.deleteBlock({ blockId }).then(() => {
      close()
    })
  }

  const handleSaveBlock = () => {
    postSaveBlock(undefined, {
      onSuccess: () => {
        close()
      },
      onError: () => {
        console.log('error')
        // TODO 에러 처리
      },
    })
  }

  const handleMoreClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    if (locked) return
    open(
      {
        title,
        items: [
          { key: 'edit', title: '수정하기' },
          { key: 'delete', title: '삭제하기' },
          {
            key: 'saveBlock',
            title: '블럭 저장하기',
          },
        ],
      },
      {
        onItemClick: (key: string) => {
          if (key === 'edit') handleEditBlock()
          if (key === 'delete') handleDeleteBlock()
          if (key === 'saveBlock') handleSaveBlock()
        },
      },
    )
  }

  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return (
    <div
      key={blockId}
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
      <div className="flex items-center" onClick={handleBlockClick}>
        <BlockIcon icon={icon} />

        <div className="flex justify-between text-base font-bold ml-2.5 mr-2 w-[calc(100%_-_34px_-_24px)]">
          {locked ? (
            <div className="flex items-center">
              <LockIcon className="fill-white" width={18} height={18} />
              <p className="ml-2.5">{LOCKED_TEXT}</p>
            </div>
          ) : (
            <p>{title}</p>
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
          <AddTaskButton blockId={blockId} />
          <div className="mt-6">
            {tasks?.map((task) => (
              <Task {...task} key={task.taskId} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Block

import clsx from 'clsx'
import { useState } from 'react'
import { MoreVerticalIcon } from '@/components/Icons'
import type { BlockDetail } from '@/types/block'
import useRNListBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNListBottomSheet'
import AddTaskButton from './AddTaskButton'
import Task from './Task'
import { dayBlockAPI } from '@/api'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { BASE_URL } from '@/constants/urls'
import useHttpRequest from '@/hooks/useHttpRequest'
import LoadingContainer from '../Loading/Container'
import { DeleteBlockParams } from '@/api/types/base.types'

const BlockIcon = ({ emoji }: { emoji: string }) => {
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
      {emoji}
    </div>
  )
}

const Block = ({
  refetch,
  blockId,
  backgroundColor,
  emoji,
  title,
  numOfTasks,
  numOfDoneTask,
  tasks,
}: BlockDetail & {
  refetch: () => void
  handleDelete?: () => void
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [open, close] = useRNListBottomSheet('blockMenu')

  const [, postSaveBlock, isSaveLoading] = useHttpRequest(() =>
    dayBlockAPI.saveBlock({ blockId }).then(({ data }) => data),
  )
  const [, deleteBlock] = useHttpRequest((params: DeleteBlockParams) =>
    dayBlockAPI.deleteBlock(params).then(({ data }) => data),
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
    deleteBlock(
      { blockId },
      {
        onSuccess: () => {
          refetch()
          close()
        },
      },
    )
  }

  const handleSaveBlock = () => {
    postSaveBlock(undefined, {
      onSuccess: () => {
        close()
      },
      onError: () => {
        console.log('error')
        // TODO ?????? ??????
      },
    })
  }

  const handleMoreClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    open(
      {
        title,
        items: [
          { key: 'edit', title: '????????????' },
          { key: 'delete', title: '????????????' },
          {
            key: 'saveBlock',
            title: '?????? ????????????',
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

  return (
    <>
      <LoadingContainer loading={isSaveLoading} />
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
        style={{ backgroundColor: backgroundColor as string }}
      >
        <div className="flex items-center" onClick={handleBlockClick}>
          <BlockIcon emoji={emoji} />

          <div className="flex justify-between text-base font-bold ml-2.5 mr-2 w-[calc(100%_-_34px_-_24px)]">
            <p>{title}</p>

            <p className="font-medium">
              {numOfDoneTask}/{numOfTasks}
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
                <Task key={task.taskId} {...task} blockId={blockId} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Block

import clsx from 'clsx'
import { useEffect } from 'react'
import { MoreVerticalIcon } from '@/components/Icons'
import { Block as TodoBlock } from '@/types/block'
import useRNListBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNListBottomSheet'
import webBridge from '@/utils/react-native-webview-bridge'

type Block = Pick<TodoBlock, 'color' | 'icon' | 'blockTitle' | 'sumOfTask'>

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

const SavedBlock = ({
  color,
  icon,
  blockTitle,
  sumOfTask,
}: Block & { locked?: boolean }) => {
  const [open] = useRNListBottomSheet('blockMenu')

  const handleMoreClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    open({
      title: blockTitle,
      items: [{ key: 'delete', title: '삭제하기' }],
    })
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
        'w-full',
      )}
      style={{ backgroundColor: color as string }}
    >
      <div className="flex items-center">
        <BlockIcon icon={icon} />

        <div className="flex justify-between text-base font-bold ml-2.5 mr-2 w-[calc(100%_-_34px_-_24px)]">
          <p>{blockTitle}</p>
          <p className="font-medium">{sumOfTask}</p>
        </div>

        <button type="button" className="w-6 h-6" onClick={handleMoreClick}>
          <MoreVerticalIcon className="!fill-white" />
        </button>
      </div>
    </div>
  )
}

export default SavedBlock

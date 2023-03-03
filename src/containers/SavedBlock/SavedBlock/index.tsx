import clsx from 'clsx'

import { SavedBlock as SavedBlockType } from '@/types/block'

import { MoreVerticalIcon } from '@/components/Icons'
import CheckBox from '@/components/CheckBox'

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

interface Props extends SavedBlockType {
  checkable: boolean
  onMoreClick: (block: SavedBlockType) => void
  onCheckClick: (value: boolean, id: number) => void
}

const SavedBlock = ({
  checkable,
  onMoreClick,
  onCheckClick,
  ...blockData
}: Props) => {
  const handleMoreClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onMoreClick(blockData)
  }

  return (
    <div className={clsx('flex', 'gap-[14px]', 'w-full', 'items-center')}>
      {checkable && (
        <CheckBox
          shape="rectangle"
          onChange={(value) => onCheckClick(value, blockData.blockId)}
        />
      )}
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
        style={{ backgroundColor: blockData.backgroundColor }}
      >
        <div className="flex items-center">
          <BlockIcon emoji={blockData.emoji} />

          <div className="flex justify-between text-base font-bold ml-2.5 mr-2 w-[calc(100%_-_34px_-_24px)]">
            <p>{blockData.title}</p>
            <p className="font-medium">{blockData.numOfTasks}</p>
          </div>

          <button type="button" className="w-6 h-6" onClick={handleMoreClick}>
            <MoreVerticalIcon className="!fill-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SavedBlock

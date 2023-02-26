import { dayBlockAPI } from '@/api'
import Button from '@/components/Button'
import { AddIcon } from '@/components/Icons'

const AddTaskButton = ({ blockId }: { blockId: number }) => {
  const handleClick = () => {
    dayBlockAPI.createTaskInBlock({
      blockId,
      content: '',
    })
  }

  return (
    <Button
      color="white"
      rounded="sm"
      className="!px-3 !py-1 !w-fit"
      onClick={handleClick}
    >
      추가하기
      <AddIcon className="fill-textGray-100 ml-1" width={14} height={14} />
    </Button>
  )
}

export default AddTaskButton

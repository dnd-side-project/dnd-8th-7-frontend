import Button from '@/components/Button'
import { AddIcon } from '@/components/Icons'

const AddTaskButton = () => {
  return (
    <Button color="white" rounded="sm" className="!px-3 !py-1 !w-fit">
      추가하기
      <AddIcon className="fill-textGray-100 ml-1" width={14} height={14} />
    </Button>
  )
}

export default AddTaskButton

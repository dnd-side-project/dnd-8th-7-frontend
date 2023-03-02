import { dayBlockAPI } from '@/api'
import { CreateTaskInBlockParams } from '@/api/types/base.types'
import Button from '@/components/Button'
import { AddIcon } from '@/components/Icons'
import useHttpRequest from '@/hooks/useHttpRequest'
import useBlockListStore from '@/store/blocks'

const AddTaskButton = ({ blockId }: { blockId: number }) => {
  const addNewTaskStore = useBlockListStore((state) => state.addNewTask)
  const [, createTask] = useHttpRequest((params: CreateTaskInBlockParams) =>
    dayBlockAPI.createTaskInBlock(params).then(({ data }) => data),
  )

  const handleClick = () => {
    createTask(
      { blockId, content: '' },
      {
        onSuccess: ({ taskId: newTaskId }) => {
          addNewTaskStore(blockId, newTaskId)
        },
      },
    )
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

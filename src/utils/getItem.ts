import { BlockList } from '@/types/block'
/**
 *
 * @param blocks 탐색할 BlockDetail[]
 * @param blockId 탐색할 블럭의 blockId
 * @param taskId 탐색할 태스크의 taskId
 */

const getItem = (
  blocks: BlockList['blocks'],
  blockId: number,
  taskId?: number,
) => {
  const blockIndex = blocks.findIndex((block) => block.blockId === blockId)
  const taskIndex = blocks[blockIndex].tasks.findIndex(
    (task) => task.taskId === taskId,
  )
  return {
    block: blocks[blockIndex],
    task: blocks[blockIndex].tasks[taskIndex],
    blockIndex,
    taskIndex,
  }
}

export default getItem

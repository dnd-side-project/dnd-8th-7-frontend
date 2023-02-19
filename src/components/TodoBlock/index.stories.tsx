import { ComponentMeta, ComponentStory } from '@storybook/react'
import TodoBlock from '@/components/TodoBlock'
import { Block } from '@/types/block'

export default {
  title: 'components/TodoBlock',
  components: TodoBlock,
} as ComponentMeta<typeof TodoBlock>

const Template: ComponentStory<typeof TodoBlock> = (args) => (
  <TodoBlock {...args} />
)

const MOCK_DATA: Block = {
  color: 'FF7154',
  icon: '',
  blockTitle: '출근 준비',
  sumOfTask: 4,
  sumOfDoneTask: 2,
  tasks: [
    {
      task: '할 일 1',
      isDone: false,
    },
    {
      task: '할 일 2',
      isDone: true,
    },
    {
      task: '할 일 3',
      isDone: true,
    },
    {
      task: '할 일 3',
      isDone: false,
    },
  ],
}

const { color, icon, blockTitle, sumOfTask, sumOfDoneTask, tasks } = MOCK_DATA

export const Basic = Template.bind({})
Basic.args = {
  color,
  icon,
  blockTitle,
  sumOfTask,
  sumOfDoneTask,
  tasks,
}

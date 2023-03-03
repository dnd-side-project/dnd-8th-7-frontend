import { ComponentMeta, ComponentStory } from '@storybook/react'
import Block from '@/containers/SavedBlock/SavedBlock'

export default {
  title: 'components/Block',
  components: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />

const MOCK_DATA = {
  backgroundColor: '#FF7154',
  emoji: '😂',
  title: '출근 준비',
  numOfTasks: 4,
}

const { backgroundColor, emoji, title, numOfTasks } = MOCK_DATA

export const SavedBlock = Template.bind({})
SavedBlock.args = {
  backgroundColor,
  emoji,
  title,
  numOfTasks,
}

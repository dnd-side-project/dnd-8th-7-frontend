import { ComponentMeta, ComponentStory } from '@storybook/react'
import Block from '@/containers/SavedBlock/SavedBlock'

export default {
  title: 'components/Block',
  components: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />

const MOCK_DATA = {
  color: '#FF7154',
  icon: '😂',
  blockTitle: '출근 준비',
  sumOfTask: 4,
}

const { color, icon, blockTitle, sumOfTask } = MOCK_DATA

export const SavedBlock = Template.bind({})
SavedBlock.args = {
  color,
  icon,
  blockTitle,
  sumOfTask,
}

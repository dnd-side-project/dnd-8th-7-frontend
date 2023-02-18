import { ComponentMeta, ComponentStory } from '@storybook/react'
import BlockInput from '@/components/BlockInput'
import { noop } from '@/utils'

export default {
  title: 'components/BlockInput',
  components: BlockInput,
} as ComponentMeta<typeof BlockInput>

const Template: ComponentStory<typeof BlockInput> = (args) => (
  <BlockInput {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  count: true,
  defaultValue: '',
  placeholder: '블록 제목을 입력하세요',
  onEmojiChange: noop,
}

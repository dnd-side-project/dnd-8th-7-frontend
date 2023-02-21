import { ComponentMeta, ComponentStory } from '@storybook/react'
import { INPUT_STATUE } from '@/components/Input'
import BlockTitleInput from '@/containers/NewBlock/BlockTitleInput'
import { noop } from '@/utils'

export default {
  title: 'components/Input',
  components: BlockTitleInput,
  argTypes: {
    status: {
      options: INPUT_STATUE,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof BlockTitleInput>

const BlockTemplate: ComponentStory<typeof BlockTitleInput> = (args) => (
  <BlockTitleInput {...args} />
)
export const Block = BlockTemplate.bind({})
Block.args = {
  showLimitCount: true,
  maxLength: 15,
  defaultValue: '',
  placeholder: '블록 제목 생성 Input 입니다',
  onEmojiChange: noop,
}

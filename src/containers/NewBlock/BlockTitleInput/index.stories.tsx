import { ComponentMeta, ComponentStory } from '@storybook/react'
import { statusOptions } from '@/components/Input/consts'
import BlockTitleInput from '@/containers/NewBlock/BlockTitleInput'
import { noop } from '@/utils'

export default {
  title: 'components/Input',
  components: BlockTitleInput,
  argTypes: {
    status: {
      options: statusOptions,
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

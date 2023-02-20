import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '@/components/Input'
import BlockInput from '@/components/Input/BlockInput'
import { noop } from '@/utils'

export default {
  title: 'components/Input',
  components: BlockInput,
} as ComponentMeta<typeof Input>

const BasicTemplate: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)
export const Basic = BasicTemplate.bind({})
Basic.args = {
  showLimitCount: true,
  maxLength: 20,
  defaultValue: '',
  placeholder: '기본 Input 입니다',
}

const BlockTemplate: ComponentStory<typeof BlockInput> = (args) => (
  <BlockInput {...args} />
)
export const Block = BlockTemplate.bind({})
Block.args = {
  showLimitCount: true,
  maxLength: 15,
  defaultValue: '',
  placeholder: '블록 제목 생성 Input 입니다',
  onEmojiChange: noop,
}

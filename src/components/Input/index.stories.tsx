import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '@/components/Input'
import { statusOptions } from './consts'

export default {
  title: 'components/Input',
  components: Input,
  argTypes: {
    status: {
      options: statusOptions,
      control: { type: 'radio' },
    },
  },
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
  statusMessage: '상태에 따른 메세지',
  noStatusMessage: false,
  status: 'default',
}

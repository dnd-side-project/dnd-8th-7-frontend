import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header, { buttonOptions } from '@/components/Header'

export default {
  title: 'components/Header',
  components: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftButton: {
      options: buttonOptions,
      control: { type: 'radio' },
    },
    rightButton: {
      options: buttonOptions,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: '상단 타이틀',
  leftButton: 'back',
  rightButton: 'more',
}

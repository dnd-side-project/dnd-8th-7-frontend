import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button, { sizeOptions, colorOptions } from '.'

export default {
  title: 'components/Button',
  components: Button,
  argTypes: {
    size: {
      options: sizeOptions,
      control: { type: 'radio' },
    },
    color: {
      options: colorOptions,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: '기본 버튼',
  disabled: false,
  size: 'sm',
  color: 'black',
}

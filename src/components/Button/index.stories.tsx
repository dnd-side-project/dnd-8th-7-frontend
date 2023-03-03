import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '@/components/Button'
import {
  colorOptions,
  fontWeightOptions,
  roundedOptions,
  sizeOptions,
} from './consts'

export default {
  title: 'components/Button',
  components: Button,
  argTypes: {
    size: {
      options: sizeOptions,
      control: { type: 'radio' },
    },
    backgroundColor: {
      options: colorOptions,
      control: { type: 'radio' },
    },
    fontWeight: {
      options: fontWeightOptions,
      control: { type: 'radio' },
    },
    rounded: {
      options: roundedOptions,
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
  backgroundColor: 'black',
  fontWeight: 'medium',
  rounded: 'md',
  outlined: false,
}

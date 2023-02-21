import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckBox from '@/components/CheckBox'

export default {
  title: 'components/CheckBox',
  components: CheckBox,
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  defaultChecked: true,
}

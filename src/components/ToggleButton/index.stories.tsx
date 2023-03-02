import { ComponentMeta, ComponentStory } from '@storybook/react'
import ToggleButton from '@/components/ToggleButton'

export default {
  title: 'components/ToggleButton',
  components: ToggleButton,
} as ComponentMeta<typeof ToggleButton>

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: '팔로우',
  value: 'follow',
}

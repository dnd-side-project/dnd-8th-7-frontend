import { ComponentMeta, ComponentStory } from '@storybook/react'
import Preparing from '@/components/Preparing'

export default {
  title: 'components/Preparing',
  components: Preparing,
} as ComponentMeta<typeof Preparing>

const Template: ComponentStory<typeof Preparing> = (args) => (
  <Preparing {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  text: `열심히 개발하고 있어요\n조금만 기다려주세요!`,
  outlined: false,
}

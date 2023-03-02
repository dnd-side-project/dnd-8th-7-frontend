import { ComponentMeta, ComponentStory } from '@storybook/react'
import PercentageProfile from '@/components/PercentageProfile'

export default {
  title: 'components/Profile',
  components: PercentageProfile,
} as ComponentMeta<typeof PercentageProfile>

const Template: ComponentStory<typeof PercentageProfile> = (args) => (
  <PercentageProfile {...args} />
)

export const Percentage = Template.bind({})
Percentage.args = {
  imgSrc: '',
  percentage: 70,
  showNumber: true,
}

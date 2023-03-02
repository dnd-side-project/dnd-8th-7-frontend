import { ComponentMeta, ComponentStory } from '@storybook/react'
import Profile from '@/components/Profile'

export default {
  title: 'components/Profile',
  components: Profile,
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Basic = Template.bind({})
Basic.args = {
  imgSrc: '',
}

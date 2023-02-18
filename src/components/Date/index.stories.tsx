import { ComponentMeta, ComponentStory } from '@storybook/react'
import Date from '@/components/Date'

export default {
  title: 'components/Date',
  components: Date,
} as ComponentMeta<typeof Date>

const Template: ComponentStory<typeof Date> = (args) => <Date {...args} />

export const Basic = Template.bind({})
Basic.args = {
  date: '2022-01-25',
  totalBlock: 4,
  totalTask: 14,
}

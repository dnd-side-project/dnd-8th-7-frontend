import { ComponentMeta, ComponentStory } from '@storybook/react'
import NoData from '@/components/NoData'

export default {
  title: 'components/NoData',
  components: NoData,
} as ComponentMeta<typeof NoData>

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />

export const Basic = Template.bind({})
Basic.args = {
  text: '등록된 블록이 없어요\n 새 블럭을 만들어보세요!',
  outlined: false,
}

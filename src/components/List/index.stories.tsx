import { ComponentMeta, ComponentStory } from '@storybook/react'
import List from '@/components/List'

export default {
  title: 'components/List',
  components: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Basic = Template.bind({})
Basic.args = {
  items: [
    {
      id: '1',
      title: '프로필 편집',
    },
    {
      id: '2',
      title: '저장한 블럭',
    },
    {
      id: '3',
      title: '약관 확인',
    },
  ],
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import DailyBlock from '@/components/DailyBlock'

export default {
  title: 'components/DailyBlock',
  components: DailyBlock,
} as ComponentMeta<typeof DailyBlock>

const Template: ComponentStory<typeof DailyBlock> = (args) => (
  <DailyBlock {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  colors: [{ blockId: 1, backgroundColor: '#FF7154' }],
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Block from '@/components/Block'

export default {
  title: 'components/Block',
  components: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />

export const Basic = Template.bind({})
Basic.args = {
  colors: ['FF7154', 'FFB673', '5B9DFF'],
}

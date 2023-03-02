import { ComponentMeta, ComponentStory } from '@storybook/react'
import Switch from '@/components/Switch'
import { noop } from '@/utils'

export default {
  title: 'components/Switch',
  components: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Basic = Template.bind({})
Basic.args = {
  defaultChecked: true,
  onChange: noop,
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import ColorPicker from '@/components/ColorPicker'
import { noop } from '@/utils'

export default {
  title: 'components/ColorPicker',
  components: ColorPicker,
} as ComponentMeta<typeof ColorPicker>

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  defaultColors: [
    '#FF7154',
    '#FF7179',
    '#FFB673',
    '#7CCAE2',
    '#5B9DFF',
    '#7E85FF',
  ],
  defaultPicked: '#FFB673',
  onChange: noop,
}

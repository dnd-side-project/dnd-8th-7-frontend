import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '.'

export default {
  title: 'components/Button',
  components: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Basic = Template.bind({})

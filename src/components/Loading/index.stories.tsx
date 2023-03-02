import { ComponentMeta, ComponentStory } from '@storybook/react'
import Loading from '@/components/Loading'
import LoadingContainer from '@/components/Loading/Container'

export default {
  title: 'components/Loading',
  components: Loading,
} as ComponentMeta<typeof Loading>

const LoadingTemplate: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
)
export const Basic = LoadingTemplate.bind({})
Basic.args = {
  className: 'w-[80px]',
}

const ContainerTemplate: ComponentStory<typeof LoadingContainer> = (args) => (
  <LoadingContainer {...args} />
)
export const Container = ContainerTemplate.bind({})
Container.args = {
  loading: true,
}

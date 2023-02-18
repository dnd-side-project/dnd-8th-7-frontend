import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tabs from '@/components/Tabs'

export default {
  title: 'components/Tabs',
  components: Tabs,
} as ComponentMeta<typeof Tabs>

export const Basic: ComponentStory<typeof Tabs> = () => {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.Tab id={0} text="하루 블럭" />
        <Tabs.Tab id={1} text="달력" />
      </Tabs.TabList>
      <Tabs.TabPanel id={0}>
        <div>내용 0</div>
      </Tabs.TabPanel>
      <Tabs.TabPanel id={1}>
        <div>내용 1s</div>
      </Tabs.TabPanel>
    </Tabs>
  )
}

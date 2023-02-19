import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckBox from '@/components/CheckBox'

export default {
  title: 'components/CheckBox',
  components: CheckBox,
} as ComponentMeta<typeof CheckBox>

export const Main: ComponentStory<typeof CheckBox> = () => {
  return (
    <div className="bg-red rounded-lg px-4 py-2">
      <CheckBox value="task" name="task">
        <p className="ml-2.5 text-white">체크박스 내용</p>
      </CheckBox>
    </div>
  )
}

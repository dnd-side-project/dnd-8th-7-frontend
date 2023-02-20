import { ComponentMeta, ComponentStory } from '@storybook/react'
import TaskCheckBox from '@/components/TaskCheckBox'

export default {
  title: 'components/TaskCheckBox',
  components: TaskCheckBox,
} as ComponentMeta<typeof TaskCheckBox>

export const Main: ComponentStory<typeof TaskCheckBox> = () => {
  return (
    <div className="bg-red rounded-lg px-4 py-2">
      <TaskCheckBox value="task" name="task">
        <p className="ml-2.5 text-white">체크박스 내용</p>
      </TaskCheckBox>
    </div>
  )
}

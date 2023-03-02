import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as Icons from './index'
import { SvgProps } from '@/types/svg'

type IconComponent = ({ ...rest }: SvgProps) => JSX.Element

export default {
  title: 'Components/Icons',
} as ComponentMeta<IconComponent>

const Template: ComponentStory<IconComponent> = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {Object.keys(Icons).map((key, idx) => {
        const Icon = Icons[key as keyof typeof Icons]
        return (
          <div
            key={idx}
            className="flex flex-col items-center justify-center h-28 p-4"
          >
            <div className="flex items-center justify-center h-full">
              <Icon />
            </div>
            <p className="mt-2 text-sm text-black">{key}</p>
          </div>
        )
      })}
    </div>
  )
}

export const Basic = Template.bind({})

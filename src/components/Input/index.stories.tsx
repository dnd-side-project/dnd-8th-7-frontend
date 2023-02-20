import { ComponentMeta } from '@storybook/react'
import Input from '@/components/Input'
import BlockInput from '@/components/Input/BlockInput'
import { noop } from '@/utils'

export default {
  title: 'components/BlockInput',
  components: BlockInput,
} as ComponentMeta<typeof BlockInput>

export const Basic = () => (
  <Input
    {...{
      showLimitCount: true,
      maxLength: 20,
      defaultValue: '',
      placeholder: '기본 Input 입니다',
    }}
  />
)

export const Block = () => (
  <BlockInput
    {...{
      showLimitCount: true,
      maxLength: 15,
      defaultValue: '',
      placeholder: '블록 제목 생성 Input 입니다',
      onEmojiChange: noop,
    }}
  />
)

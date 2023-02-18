import clsx from 'clsx'
import { BLOCK_COLOR_CONFIG, BlockColorType } from '@/constants/block'

const MAX_COLORS = 5 // 보여질 최대 색상 개수
const MOCK_COLORS: BlockColorType[] = [
  'FF7154',
  'FFB673',
  '7CCAE2',
  '5B9DFF',
  '7E85FF',
]
const HEIGHT = ['', 'h-full', 'h-1/2', 'h-1/3', 'h-1/4', 'h-1/5']

interface Props {
  colors: BlockColorType[]
}

const Block = ({ colors = MOCK_COLORS }: Props) => {
  const totalBlocks = colors.length

  const showColors = () => {
    const coloredBlocks = []
    for (let i = 0; i <= totalBlocks; i++) {
      coloredBlocks.push(
        <div
          key={i}
          className={clsx(
            BLOCK_COLOR_CONFIG[colors[i]],
            totalBlocks <= MAX_COLORS
              ? HEIGHT[totalBlocks]
              : HEIGHT[MAX_COLORS],
          )}
        />,
      )
    }
    return coloredBlocks
  }

  return (
    <div className="rounded-[6px] w-6 h-7 overflow-hidden">{showColors()}</div>
  )
}

export default Block

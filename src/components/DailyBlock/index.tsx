import clsx from 'clsx'
import type { DailyBlock as DailyBlockType } from '@/types/block'

const MAX_COLORS = 5 // 보여질 최대 색상 개수
const HEIGHT = ['', 'h-full', 'h-1/2', 'h-1/3', 'h-1/4', 'h-1/5']

interface Props {
  colors: DailyBlockType['backgroundColors']
}

const DailyBlock = ({ colors }: Props) => {
  const getColors = () => {
    const arr = []
    for (let i = 0; i < colors.length; i++) {
      arr.push(colors[i].backgroundColor)
    }
    return arr
  }

  const colorList = getColors()
  const totalBlocks = colorList.length

  const showColors = () => {
    const coloredBlocks = []
    if (!totalBlocks) return <div className="bg-gray-100 h-full" />
    for (let i = 0; i <= totalBlocks; i++) {
      coloredBlocks.push(
        <div
          key={i}
          className={clsx(HEIGHT[Math.min(totalBlocks, MAX_COLORS)])}
          style={{ backgroundColor: colorList[i] }}
        />,
      )
    }
    return coloredBlocks
  }

  return (
    <div className="rounded-[6px] w-6 h-7 overflow-hidden">{showColors()}</div>
  )
}

export default DailyBlock

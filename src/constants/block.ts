import { Block } from '@/types/block'

export enum BlockColors {
  FF7154 = 'FF7154',
  FFB673 = 'FFB673',
  '5B9DFF' = '5B9DFF',
  '7E85FF' = '7E85FF',
  '7CCAE2' = '7CCAE2',
}
export type BlockColorType = keyof typeof BlockColors

export const BLOCK_COLOR_CONFIG = {
  FF7154: 'bg-red',
  FFB673: 'bg-orange',
  '5B9DFF': 'bg-blue',
  '7E85FF': 'bg-purple',
  '7CCAE2': 'bg-skyblue',
}

// mock data - 추후 제거 예정
const BLOCK_DATA: Block = {
  color: 'FF7154',
  icon: '',
  blockTitle: '출근 준비',
  sumOfTask: 4,
  sumOfDoneTask: 2,
  tasks: [
    {
      task: '할 일 1',
      isDone: false,
    },
    {
      task: '할 일 2',
      isDone: true,
    },
    {
      task: '할 일 3',
      isDone: true,
    },
    {
      task: '할 일 3',
      isDone: false,
    },
  ],
}

export const BLOCK_LIST_DATA: Block[] = [
  BLOCK_DATA,
  {
    ...BLOCK_DATA,
    color: 'FFB673',
    blockTitle: '회사',
  },
  {
    ...BLOCK_DATA,
    color: '7E85FF',
    blockTitle: '디앤디',
  },
  {
    ...BLOCK_DATA,
    color: '5B9DFF',
    blockTitle: '휴식',
  },
]

export const MOCK_COLORS: BlockColorType[] = [
  'FF7154',
  'FFB673',
  '7CCAE2',
  '5B9DFF',
  '7E85FF',
]

export const DAYS = ['일', '월', '화', '수', '목', '금', '토']

export const MOCK_WEEKLY_BLOCKS = [
  {
    date: '2022-01-23',
    colors: MOCK_COLORS,
  },
  {
    date: '2022-01-24',
    colors: MOCK_COLORS,
  },
  {
    date: '2022-01-25',
    colors: MOCK_COLORS,
  },
  {
    date: '2022-01-26',
    colors: MOCK_COLORS,
  },
  {
    date: '2022-01-27',
    colors: MOCK_COLORS,
  },
  {
    date: '2022-01-28',
    colors: MOCK_COLORS,
  },
  {
    date: '2022-01-29',
    colors: MOCK_COLORS,
  },
]

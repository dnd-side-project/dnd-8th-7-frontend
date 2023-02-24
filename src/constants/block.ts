import { Block } from '@/types/block'

// mock data - 추후 제거 예정
const MOCK_BLOCK: Block = {
  color: '#FF7154',
  icon: '',
  blockTitle: '출근 준비',
  sumOfTask: 4,
  sumOfDoneTask: 2,
  tasks: [
    {
      taskId: 1,
      task: '할 일 1',
      isDone: false,
    },
    {
      taskId: 2,
      task: '할 일 2',
      isDone: true,
    },
    {
      taskId: 3,
      task: '할 일 3',
      isDone: true,
    },
    {
      taskId: 4,
      task: '할 일 3',
      isDone: false,
    },
  ],
}

export const MOCK_BLOCK_LIST: Block[] = [
  MOCK_BLOCK,
  {
    ...MOCK_BLOCK,
    color: '#FFB673',
    blockTitle: '회사',
  },
  {
    ...MOCK_BLOCK,
    color: '#7E85FF',
    blockTitle: '디앤디',
  },
  {
    ...MOCK_BLOCK,
    color: '#5B9DFF',
    blockTitle: '휴식',
  },
]

export const MOCK_COLORS: string[] = [
  '#FF7154',
  '#FFB673',
  '#7CCAE2',
  '#5B9DFF',
  '#7E85FF',
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

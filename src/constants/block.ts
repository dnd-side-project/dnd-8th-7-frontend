import { Block, BlockList } from '@/types/block'

export const DAYS = ['일', '월', '화', '수', '목', '금', '토']

// mock data - 추후 제거 예정
const MOCK_BLOCK: Block = {
  color: '#FF7154',
  icon: '',
  title: '출근 준비',
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

export const MOCK_BLOCK_LIST: BlockList = {
  date: '2022-01-25',
  totalBlock: 2,
  totalTask: 3,
  blocks: [
    {
      color: '#FF7154',
      icon: '😀',
      title: '제목1',
      sumOfTask: 2,
      sumOfDoneTask: 1,
      tasks: [
        {
          taskId: 1,
          task: 'content',
          isDone: true,
        },
        {
          taskId: 2,
          task: 'content2',
          isDone: false,
        },
      ],
    },
    {
      color: '#7E85FF',
      icon: '🥲',
      title: '제목2',
      sumOfTask: 1,
      sumOfDoneTask: 1,
      tasks: [
        {
          taskId: 3,
          task: 'content3',
          isDone: true,
        },
      ],
    },
  ],
}

export const MOCK_COLORS: string[] = [
  '#FF7154',
  '#FFB673',
  '#7CCAE2',
  '#5B9DFF',
  '#7E85FF',
]

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

import { BlockList } from '@/types/block'

export const MOCK_BLOCK_LIST: BlockList = {
  date: '2022-01-25',
  totalBlock: 2,
  totalTask: 3,
  reviewId: 1,
  blocks: [
    {
      blockId: 1,
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
      blockId: 2,
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
    color: MOCK_COLORS,
  },
  {
    date: '2022-01-24',
    color: MOCK_COLORS,
  },
  {
    date: '2022-01-25',
    color: MOCK_COLORS,
  },
  {
    date: '2022-01-26',
    color: MOCK_COLORS,
  },
  {
    date: '2022-01-27',
    color: MOCK_COLORS,
  },
  {
    date: '2022-01-28',
    color: MOCK_COLORS,
  },
  {
    date: '2022-01-29',
    color: MOCK_COLORS,
  },
]

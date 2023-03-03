import { BlockList } from '@/types/block'

export const MOCK_BLOCK_LIST: BlockList = {
  date: '2022-01-25',
  numOfTotalBlocks: 2,
  numOfTotalTasks: 3,
  reviewId: 1,
  blocks: [
    {
      blockId: 1,
      backgroundColor: '#FF7154',
      emoji: '😀',
      title: '제목1',
      numOfTasks: 2,
      numOfDoneTask: 1,
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
      backgroundColor: '#7E85FF',
      emoji: '🥲',
      title: '제목2',
      numOfTasks: 1,
      numOfDoneTask: 1,
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
    backgroundColor: MOCK_COLORS,
  },
  {
    date: '2022-01-24',
    backgroundColor: MOCK_COLORS,
  },
  {
    date: '2022-01-25',
    backgroundColor: MOCK_COLORS,
  },
  {
    date: '2022-01-26',
    backgroundColor: MOCK_COLORS,
  },
  {
    date: '2022-01-27',
    backgroundColor: MOCK_COLORS,
  },
  {
    date: '2022-01-28',
    backgroundColor: MOCK_COLORS,
  },
  {
    date: '2022-01-29',
    backgroundColor: MOCK_COLORS,
  },
]

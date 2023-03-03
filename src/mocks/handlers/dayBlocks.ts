import {
  CreateBlockResponse,
  CreateDailyReviewParams,
  UpdateTaskInBlockParams,
} from '@/api/types/base.types'
import { colors } from '@/styles/theme'
import dayjs from 'dayjs'
import { rest } from 'msw'

export const getDailyBlocksOnWeek = rest.get(
  '/api/block/:date',
  (req, res, ctx) => {
    const date = req.params.date as string
    return res(
      ctx.json({
        nickname: '알잘딱깔센',
        dailyBlocks: [
          {
            date: dayjs(date).subtract(3, 'days').format('YYYY-MM-DD'),
            backgroundColor: [colors.red, colors.orange],
          },
          {
            date: dayjs(date).subtract(2, 'days').format('YYYY-MM-DD'),
            backgroundColor: [],
          },
          {
            date: dayjs(date).subtract(1, 'days').format('YYYY-MM-DD'),
            backgroundColor: [colors.blue],
          },
          {
            date,
            backgroundColor: [
              colors.purple,
              colors.blue,
              colors.pink,
              colors.red,
            ],
          },
          {
            date: dayjs(date).add(1, 'days').format('YYYY-MM-DD'),
            backgroundColor: [colors.blue, colors.pink],
          },
          {
            date: dayjs(date).add(2, 'days').format('YYYY-MM-DD'),
            backgroundColor: [colors.pink, colors.red],
          },
          {
            date: dayjs(date).add(3, 'days').format('YYYY-MM-DD'),
            backgroundColor: [colors.red],
          },
        ],
      }),
    )
  },
)

export const getDayBlocks = rest.get(
  `/api/block/detail/:date`,
  (req, res, ctx) => {
    const date = req.params.date as string
    return res(
      ctx.json({
        date,
        numOfTotalBlocks: 1,
        numOfTotalTasks: 1,
        reviewId: 2,
        blocks: [
          {
            blockId: 1,
            backgroundColor: colors.red,
            emoji: '😄',
            title: '출근 준비',
            numOfTasks: 2,
            numOfDoneTask: 1,
            tasks: [
              {
                taskId: 1,
                task: '할 일 할 일 할 일',
                isDone: true,
              },
              {
                taskId: 2,
                task: '할 일 할 일 할 일',
                isDone: false,
              },
            ],
          },
          {
            blockId: 2,
            backgroundColor: colors.red,
            emoji: '😄',
            title: '출근 준비',
            numOfTasks: 2,
            numOfDoneTask: 1,
            tasks: [
              {
                taskId: 1,
                task: '할 일 할 일 할 일',
                isDone: true,
              },
              {
                taskId: 2,
                task: '할 일 할 일 할 일',
                isDone: false,
              },
            ],
          },
        ],
      }),
    )
  },
)

export const createBlock = rest.post(`/api/block`, (req, res, ctx) => {
  return res(
    ctx.json({
      data: {
        ...(req.body as CreateBlockResponse),
        blockId: 10,
      },
    }),
  )
})

export const deleteBlock = rest.delete(
  `/api/block/:blockId`,
  (req, res, ctx) => {
    return res(ctx.json({}))
  },
)

export const createDailyReview = rest.post(`/api/review`, (req, res, ctx) => {
  return res(
    ctx.json({
      data: {
        ...(req.body as CreateDailyReviewParams),
        reviewId: 14,
      },
    }),
  )
})

export const createTaskInBlock = rest.post(`/api/task`, (req, res, ctx) => {
  return res(
    ctx.json({
      data: {
        ...(req.body as CreateDailyReviewParams),
        taskId: 9,
      },
    }),
  )
})

export const updateTaskInBlock = rest.put(
  `/api/task/:taskId`,
  (req, res, ctx) => {
    const taskId = +(req.params.taskId as string)
    return res(
      ctx.json({
        data: {
          taskId,
          content: (req.body as UpdateTaskInBlockParams).content,
        },
      }),
    )
  },
)

export const deleteTaskInBlock = rest.delete(
  `/api/task/:taskId`,
  (req, res, ctx) => {
    const taskId = +(req.params.taskId as string)
    return res(ctx.json({ data: {} }))
  },
)

import dayjs from 'dayjs'

const DAYS = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]

const formatDate = (date?: string) => {
  const dateTime = dayjs(date)
  const formattedDate = `${dateTime.month() + 1}월 ${dateTime.date()}일 ${
    DAYS[dateTime.day()]
  }`

  return formattedDate
}

export default formatDate

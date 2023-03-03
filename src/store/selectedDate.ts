import dayjs from 'dayjs'
import { create } from 'zustand'

type State = {
  date: string
}

type Actions = {
  setSelectedDate: (date: string) => void
}

const useSelectedDateState = create<State & Actions>((set) => ({
  date: String(dayjs().format('YYYY-MM-DD')),
  setSelectedDate: (selectedDate) => {
    set(() => ({
      date: selectedDate,
    }))
  },
}))

export default useSelectedDateState

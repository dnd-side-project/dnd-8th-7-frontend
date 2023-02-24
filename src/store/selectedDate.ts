import { create } from 'zustand'

type State = {
  date: string
}

type Actions = {
  setSelectedDate: (date: string) => void
}

const useSelectedDateState = create<State & Actions>((set) => ({
  date: '',
  setSelectedDate: (selectedDate) => {
    set(() => ({
      date: selectedDate,
    }))
  },
}))

export default useSelectedDateState

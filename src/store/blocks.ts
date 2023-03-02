import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { GetDayBlocksResponse } from '@/api/types/base.types'

type State = {
  blockList: GetDayBlocksResponse
}

const INITIAL_STATE: State['blockList'] = {
  date: '',
  totalBlock: 0,
  totalTask: 0,
  reviewId: null,
  blocks: [],
}

type Actions = {
  setBlockList: (data: State['blockList']) => void
}

const useBlockListStore = create(
  immer<State & Actions>((set) => ({
    blockList: INITIAL_STATE,
    setBlockList: (data) =>
      set((state) => {
        state.blockList = data
      }),
  })),
)

export default useBlockListStore

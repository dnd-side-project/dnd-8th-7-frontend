import API from '@/api'

export const getBlocks = () => {
  return API.get('/api/block')
}

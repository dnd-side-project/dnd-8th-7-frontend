import DailyDiaryContainer from '@/containers/DailyDiary'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const DailyDiary = () => {
  return <DailyDiaryContainer />
}
export default withAuth(DailyDiary)

export const getServerSideProps = withAuthGetServerSideProps()

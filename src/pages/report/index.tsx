import ReportContainer from '@/containers/Report'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const ReportPage = () => {
  return <ReportContainer />
}
export default withAuth(ReportPage)

export const getServerSideProps = withAuthGetServerSideProps()

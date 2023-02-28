import SavedBlockContainer from '@/containers/SavedBlock'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const SavedBlolckPage = () => {
  return <SavedBlockContainer />
}
export default withAuth(SavedBlolckPage)

export const getServerSideProps = withAuthGetServerSideProps()

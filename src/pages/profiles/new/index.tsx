import NewProfileContainer from '@/containers/Profile/New'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const NewProfilePage = () => {
  return <NewProfileContainer />
}
export default withAuth(NewProfilePage)

export const getServerSideProps = withAuthGetServerSideProps()

import EditProfileContainer from '@/containers/Profile/EditProfile'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const EditProfilePage = () => {
  return <EditProfileContainer />
}
export default withAuth(EditProfilePage)

export const getServerSideProps = withAuthGetServerSideProps()

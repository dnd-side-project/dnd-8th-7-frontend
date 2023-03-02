import MyProfileContainer from '@/containers/Profile/MyProfile'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const ProfilePage = () => {
  return <MyProfileContainer />
}
export default withAuth(ProfilePage)

export const getServerSideProps = withAuthGetServerSideProps()

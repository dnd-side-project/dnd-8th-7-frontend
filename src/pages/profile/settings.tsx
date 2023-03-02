import ProfileSettingsContainer from '@/containers/Profile/Settings'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const ProfileSettingsPage = () => {
  return <ProfileSettingsContainer />
}
export default withAuth(ProfileSettingsPage)

export const getServerSideProps = withAuthGetServerSideProps()

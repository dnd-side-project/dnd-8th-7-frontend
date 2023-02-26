import SocialContainer from '@/containers/Social'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const SocialPage = () => {
  return <SocialContainer />
}
export default withAuth(SocialPage)

export const getServerSideProps = withAuthGetServerSideProps()

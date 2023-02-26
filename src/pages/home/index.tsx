import HomeContainer from '@/containers/Home'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const Home = () => {
  return <HomeContainer />
}
export default withAuth(Home)

export const getServerSideProps = withAuthGetServerSideProps()

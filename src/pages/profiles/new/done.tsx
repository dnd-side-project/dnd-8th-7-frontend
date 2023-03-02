import NewProfileCongratulationContainer from '@/containers/Profile/New/Congratulation'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const NewProfileCongratulationPage = () => {
  return <NewProfileCongratulationContainer />
}
export default withAuth(NewProfileCongratulationPage)

export const getServerSideProps = withAuthGetServerSideProps()

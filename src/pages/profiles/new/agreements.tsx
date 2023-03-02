import NewProfileAgreementsContainer from '@/containers/Profile/New/Agreements'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const NewProfileAgreementsPage = () => {
  return <NewProfileAgreementsContainer />
}
export default withAuth(NewProfileAgreementsPage)

export const getServerSideProps = withAuthGetServerSideProps()

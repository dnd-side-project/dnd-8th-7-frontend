import UpdateBlockContainer from '@/containers/UpdateBlock'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const UpdateBlockPage = () => {
  return <UpdateBlockContainer />
}
export default withAuth(UpdateBlockPage)

export const getServerSideProps = withAuthGetServerSideProps()

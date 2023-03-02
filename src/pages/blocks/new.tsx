import NewBlockContainer from '@/containers/NewBlock'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const NewBlockPage = () => {
  return <NewBlockContainer />
}
export default withAuth(NewBlockPage)

export const getServerSideProps = withAuthGetServerSideProps()

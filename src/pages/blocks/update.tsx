import UpdateBlockContainer from '@/containers/UpdateBlock'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'
import webBridge from '@/utils/react-native-webview-bridge'
import { useEffect } from 'react'

const UpdateBlockPage = () => {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])
  return <UpdateBlockContainer />
}
export default withAuth(UpdateBlockPage)

export const getServerSideProps = withAuthGetServerSideProps()

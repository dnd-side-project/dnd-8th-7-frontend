import SavedBlockContainer from '@/containers/SavedBlock'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'
import webBridge from '@/utils/react-native-webview-bridge'
import { useEffect } from 'react'

const SavedBlolckPage = () => {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return <SavedBlockContainer />
}
export default withAuth(SavedBlolckPage)

export const getServerSideProps = withAuthGetServerSideProps()

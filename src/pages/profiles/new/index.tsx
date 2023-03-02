import { useEffect } from 'react'
import webBridge from '@/utils/react-native-webview-bridge'

import NewProfileContainer from '@/containers/Profile/New'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'

const NewProfilePage = () => {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])
  return <NewProfileContainer />
}
export default withAuth(NewProfilePage)

export const getServerSideProps = withAuthGetServerSideProps()

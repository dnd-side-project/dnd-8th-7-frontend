import { useEffect } from 'react'

import EditProfileContainer from '@/containers/Profile/EditProfile'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'
import webBridge from '@/utils/react-native-webview-bridge'

const EditProfilePage = () => {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])
  return <EditProfileContainer />
}
export default withAuth(EditProfilePage)

export const getServerSideProps = withAuthGetServerSideProps()

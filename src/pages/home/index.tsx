import HomeContainer from '@/containers/Home'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'
import webBridge from '@/utils/react-native-webview-bridge'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return <HomeContainer />
}
export default withAuth(Home)

export const getServerSideProps = withAuthGetServerSideProps()

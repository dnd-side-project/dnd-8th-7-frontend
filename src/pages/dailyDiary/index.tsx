import DailyDiaryContainer from '@/containers/DailyDiary'
import { withAuth, withAuthGetServerSideProps } from '@/hoc/withAuth'
import webBridge from '@/utils/react-native-webview-bridge'
import { useEffect } from 'react'

const DailyDiary = () => {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return <DailyDiaryContainer />
}
export default withAuth(DailyDiary)

export const getServerSideProps = withAuthGetServerSideProps()

import clsx from 'clsx'

import { DOCS_URL } from '@/constants/urls'

import linkingBridge from '@/utils/react-native-webview-bridge/linking'
import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import Header from '@/components/Header'
import List from '@/components/List'

const DOCS_LIST = [
  {
    id: DOCS_URL.termsOfUse,
    title: '이용 약관',
  },
  {
    id: DOCS_URL.privacyPolicy,
    title: '개인정보처리방침',
  },
]

export default function AgreementsPage() {
  const handleBack = () => {
    rnWebViewBridge.close()
  }

  const handleItemClick = (url: string) => {
    linkingBridge.open({
      type: 'url',
      url,
    })
  }

  return (
    <div>
      <Header
        title="프로필 편집"
        leftButton="back"
        onLeftButtonClick={handleBack}
      />

      <div className={clsx('pt-[56px]', 'px-[20px]')}>
        <List items={DOCS_LIST} onItemClick={handleItemClick} />
      </div>
    </div>
  )
}

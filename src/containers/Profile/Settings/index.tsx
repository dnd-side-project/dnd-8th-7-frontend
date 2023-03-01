import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import Header from '@/components/Header'
import List from '@/components/List'
import { ACTION_TYPE } from '@/utils/react-native-webview-bridge/types/common.type'
import { authAPI } from '@/api'

const SETTING_LIST = [
  {
    id: 'logout',
    title: '로그아웃',
  },
  {
    id: 'withdraw',
    title: '탈퇴하기',
  },
]

export default function ProfileSettingsContainer() {
  const handleItemClick = (key: string) => {
    if (key === 'logout') {
      rnWebViewBridge.sendAction(ACTION_TYPE.LOGOUT)
    } else {
      authAPI
        .withdraw()
        .then(() => rnWebViewBridge.sendAction(ACTION_TYPE.LOGOUT))
    }
  }

  const handleBack = () => {
    rnWebViewBridge.close()
  }

  return (
    <div>
      <Header title="더보기" leftButton="back" onLeftButtonClick={handleBack} />
      <div className={clsx('pt-[56px]', 'mt-4')}>
        <List items={SETTING_LIST} onItemClick={handleItemClick} />
      </div>
    </div>
  )
}

import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import { BASE_URL } from '@/constants/urls'

import List from '@/components/List'
import { PATH } from '@/constants/path'
import ProfileHeader from './ProfileHeader'

const SETTING_LIST = [
  {
    id: PATH.editProfile,
    title: '프로필 편집',
  },
  {
    id: PATH.savedBlock,
    title: '저장한 블럭',
  },
  {
    id: PATH.agreements,
    title: '약관 확인',
  },
]

export default function MyProfileContainer() {
  const handleItemClick = (path: string) => {
    rnWebViewBridge.open({
      key: 'newWebView',
      url: BASE_URL + path,
    })
  }

  return (
    <div className={clsx('py-[30px]')}>
      <div className={clsx('px-[20px]', 'mb-[14px]')}>
        <ProfileHeader percentage={70} user={'짱구'} />
        <div
          className={clsx(
            'py-4',
            'px-4',
            'rounded-lg',
            'bg-gray-50',
            'text-base',
            'text-textGray-200',
          )}
        >
          프로필 한 줄 소개 공미포 최대 28자
        </div>
      </div>
      <List items={SETTING_LIST} onItemClick={handleItemClick} />
    </div>
  )
}

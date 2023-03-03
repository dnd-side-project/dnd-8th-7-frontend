import { useEffect } from 'react'
import clsx from 'clsx'

import { dayBlockAPI } from '@/api'
import useHttpRequest from '@/hooks/useHttpRequest'
import useVisibilityChange from '@/hooks/useVisibilityChange'

import { BASE_URL } from '@/constants/urls'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import List from '@/components/List'
import { PATH } from '@/constants/path'

import ProfileHeader from './ProfileHeader'
import LoadingContainer from '@/components/Loading/Container'

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
  const [myProfile, fetchMyProfile, isLoading, , isFetch] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )

  const handleItemClick = (path: string) => {
    rnWebViewBridge.open({
      key: 'newWebView',
      url: BASE_URL + path,
    })
  }

  useEffect(() => {
    fetchMyProfile()
  }, [])

  useVisibilityChange(() => {
    fetchMyProfile()
  })

  return (
    <LoadingContainer loading={!isFetch}>
      <LoadingContainer loading={isLoading} />
      <div className={clsx('py-[30px]')}>
        <div className={clsx('px-[20px]', 'mb-[14px]')}>
          <ProfileHeader
            percentage={0}
            nickname={myProfile?.nickname || ''}
            imgSrc={myProfile?.imgUrl}
          />
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
            {myProfile?.introduction}
          </div>
        </div>
        <List items={SETTING_LIST} onItemClick={handleItemClick} />
      </div>
    </LoadingContainer>
  )
}

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'
import useRNListBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNListBottomSheet'

import { dayBlockAPI } from '@/api'
import useHttpRequest from '@/hooks/useHttpRequest'

import { SavedBlock as SavedBlockType } from '@/types/block'

import { BottomButtonLayout } from '@/components/Layout'
import Header from '@/components/Header'
import NoData from '@/components/NoData'
import LoadingContainer from '@/components/Loading/Container'
import SavedBlock from './SavedBlock'

export default function SavedBlockContainer() {
  const router = useRouter()
  const [checkedBlock, setCheckedBlock] = useState<number[]>([])

  const [open, close] = useRNListBottomSheet('blockMenu')

  const date = router.query?.date as string

  const [blocks, fetchSavedBlocks, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getSavedBlocks().then(({ data }) => data),
  )
  const [, deleteSavedBlock, isDeleteLoading] = useHttpRequest(
    dayBlockAPI.deleteSavedBlock,
  )
  const [, loadSavedBlock, isloadSavedBlockLoading] = useHttpRequest(
    dayBlockAPI.loadSavedBlock,
  )

  const handleCheckClick = (value: boolean, blockId: number) => {
    if (value) {
      setCheckedBlock((ids) => [...ids, blockId])
    } else {
      if (checkedBlock.includes(blockId)) {
        const idx = checkedBlock.findIndex((id) => id === blockId)
        setCheckedBlock((ids) => [...ids.slice(0, idx), ...ids.slice(idx + 1)])
      }
    }
  }

  const handleMoreClick = (block: SavedBlockType) => {
    open(
      {
        title: block.title,
        items: [{ key: 'delete', title: '삭제하기' }],
      },
      {
        onItemClick: (key: string) => {
          if (key === 'delete') handleDeleteBlock(block.blockId)
        },
      },
    )
  }

  const handleDeleteBlock = (blockId: number) => {
    deleteSavedBlock(
      { blockId },
      {
        onSuccess: () => {
          close()
          fetchSavedBlocks()
        },
      },
    )
  }

  const handleSavedBlocksLoad = () => {
    loadSavedBlock(
      { blockIds: checkedBlock, date },
      { onSuccess: () => handleBack() },
    )
  }

  const handleBack = () => {
    rnWebViewBridge.close()
  }

  useEffect(() => {
    fetchSavedBlocks()
  }, [])

  return (
    <LoadingContainer loading={isLoading}>
      <LoadingContainer
        loading={isDeleteLoading || isloadSavedBlockLoading}
        backgroundMask
      />
      <BottomButtonLayout
        showButton={!!date && !!blocks?.length}
        buttonText="완료"
        buttonProps={{
          onClick: handleSavedBlocksLoad,
          disabled: !checkedBlock.length,
        }}
      >
        <Header
          title="블럭 불러오기"
          leftButton="back"
          onLeftButtonClick={handleBack}
        />
        <div className={clsx('pt-[56px]', 'px-[20px]', 'pb-[20px]', 'h-full')}>
          {blocks?.length ? (
            <div
              className={clsx(
                'flex',
                'flex-col',
                'pt-[30px]',
                'w-full',
                'gap-[8px]',
              )}
            >
              {blocks?.map((block) => (
                <SavedBlock
                  key={block.blockId}
                  onMoreClick={handleMoreClick}
                  onCheckClick={handleCheckClick}
                  checkable={!!date}
                  {...block}
                />
              ))}
            </div>
          ) : (
            <NoBlocks />
          )}
        </div>
      </BottomButtonLayout>
    </LoadingContainer>
  )
}

function NoBlocks() {
  return (
    <div className={clsx('flex', 'justify-center', 'items-center', 'h-full')}>
      <NoData
        text={`저장한 블럭이 없어요${'\n'}필요한 블럭을 저장해 불러와보세요!`}
      />
    </div>
  )
}

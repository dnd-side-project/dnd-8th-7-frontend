import clsx from 'clsx'
import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useState,
  useEffect,
} from 'react'

import useRNEmojiBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNEmojiBottomSheet'
import webBridge from '@/utils/react-native-webview-bridge'

import { SmileFaceIcon } from '@/components/Icons'

interface Props extends ComponentProps<'input'> {
  count?: boolean
  defaultValue?: string
  onEmojiChange?: (emoji: string) => void
}

export default forwardRef<HTMLInputElement, Props>(function BlockInput(
  { count = true, maxLength = 15, onEmojiChange, ...props },
  ref,
) {
  const [valueLength, setValueLength] = useState(
    props?.defaultValue?.length || 0,
  )
  const [emoji, setEmoji] = useState<string>()
  const [open, close] = useRNEmojiBottomSheet('newBlock')

  const handleEmojiClick = () => {
    open({
      onItemClick: (key) => {
        onEmojiChange?.(key)
        setEmoji(key)
        close()
      },
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (count) {
      setValueLength((e.nativeEvent.target as HTMLInputElement).value.length)
    }
    props?.onChange?.(e)
  }

  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'rounded-lg',
        'h-[52px]',
        'bg-gray-50',
        'p-[8px]',
        'text-black',
      )}
    >
      <button
        type="button"
        className={clsx(
          'flex',
          'justify-center',
          'items-center',
          'w-[36px]',
          'h-[36px]',
          'bg-white',
          'rounded-md',
        )}
        onClick={handleEmojiClick}
      >
        {!!emoji ? (
          <span className={clsx('text-lg')}>{emoji}</span>
        ) : (
          <SmileFaceIcon />
        )}
      </button>
      <input
        ref={ref}
        className={clsx(
          'ml-[15px]',
          'flex-1',
          'text-lg',
          'bg-gray-50',
          'outline-none',
          'placeholder:text-textGray-50',
        )}
        maxLength={maxLength}
        {...props}
        onChange={handleChange}
      />
      {count && (
        <div className={clsx('mx-[8px]', 'text-base', 'text-textGray-50')}>
          {valueLength}/{maxLength}
        </div>
      )}
    </div>
  )
})

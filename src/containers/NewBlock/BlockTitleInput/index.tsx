import clsx from 'clsx'
import { ChangeEvent, forwardRef, useState, useEffect } from 'react'

import useRNEmojiBottomSheet from '@/utils/react-native-webview-bridge/bottom-sheet/useRNEmojiBottomSheet'
import webBridge from '@/utils/react-native-webview-bridge'

import { SmileFaceIcon } from '@/components/Icons'
import Input, { InputProps } from '@/components/Input'

interface Props extends Omit<InputProps, 'left' | 'ref'> {
  onEmojiChange?: (emoji: string) => void
}

export default forwardRef<HTMLInputElement | null, Props>(
  function BlockTitleInput({ onEmojiChange, ...props }, ref = null) {
    const [value, setValue] = useState(props?.defaultValue || '')
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
      const newValue = !!props?.maxLength
        ? e.target.value.slice(0, props.maxLength)
        : e.target.value
      setValue(newValue)
      props?.onChange?.(e)
    }

    useEffect(() => {
      webBridge.init()
      return () => {
        webBridge.unmount()
      }
    }, [])

    return (
      <Input
        ref={ref}
        left={
          <button
            type="button"
            className={clsx(
              'flex',
              'justify-center',
              'items-center',
              'w-[36px]',
              'h-[36px]',
              'min-w-[36px]',
              'min-h-[36px]',
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
        }
        {...props}
        value={value}
        onChange={handleChange}
      />
    )
  },
)

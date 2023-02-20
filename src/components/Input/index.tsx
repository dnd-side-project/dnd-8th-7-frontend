import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import clsx from 'clsx'

export interface InputProps extends ComponentProps<'input'> {
  showLimitCount?: boolean
  left?: ReactNode
}

export default forwardRef<HTMLInputElement | null, InputProps>(
  function BlockInput({ left, showLimitCount = false, ...props }, ref = null) {
    const [value, setValue] = useState(props?.defaultValue?.toString() || '')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = !!props?.maxLength
        ? e.target.value.slice(0, props.maxLength)
        : e.target.value
      setValue(newValue)
      props?.onChange?.(e)
    }

    useEffect(() => {
      if (showLimitCount && props.maxLength === undefined) {
        throw new Error('maxLength 입력해주세요')
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
        {left}
        <input
          ref={ref}
          className={clsx(
            'ml-[15px]',
            'w-full',
            'text-lg',
            'bg-gray-50',
            'outline-none',
            'placeholder:text-textGray-50',
          )}
          {...props}
          value={value}
          onChange={handleChange}
        />
        {showLimitCount && (
          <div className={clsx('mx-[8px]', 'text-base', 'text-textGray-50')}>
            {value.length}/{props.maxLength}
          </div>
        )}
      </div>
    )
  },
)

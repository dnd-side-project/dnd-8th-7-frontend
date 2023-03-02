import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import clsx from 'clsx'
import { Status, StatusConfig } from './types'

const ERROR_BOX_CONFIG: StatusConfig = {
  error:
    'shadow-error shadow-[inset_1px_0px,inset_-1px_0px,inset_0px_1px,inset_0px_-1px]',
  default: '',
  success: '',
}

const STATUS_CONFIG: StatusConfig = {
  error: 'text-sm h-6 pt-1',
  default: '',
  success: '',
}

export interface InputProps extends ComponentProps<'input'> {
  showLimitCount?: boolean
  left?: ReactNode
  status?: Status
  statusMessage?: string
  noStatusMessage?: boolean
}

export default forwardRef<HTMLInputElement | null, InputProps>(
  function BlockInput(
    {
      left,
      showLimitCount = false,
      status = 'default',
      noStatusMessage = false,
      statusMessage = '',
      ...props
    },
    ref = null,
  ) {
    const [value, setValue] = useState(props?.defaultValue?.toString() || '')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = !!props?.maxLength
        ? e.target.value.slice(0, props.maxLength)
        : e.target.value
      setValue(newValue)
      props?.onChange?.(e)
    }

    const renderStatusMessage = () => {
      switch (status) {
        case 'success':
          return <div className={clsx('text-success')}>{statusMessage}</div>
        case 'error':
          return <div className={clsx('text-error')}>{statusMessage}</div>
        default:
          return null
      }
    }

    useEffect(() => {
      if (showLimitCount && props.maxLength === undefined) {
        throw new Error('maxLength 입력해주세요')
      }
    }, [showLimitCount, props.maxLength])

    return (
      <div>
        <div
          className={clsx(
            'flex',
            'items-center',
            'rounded-lg',
            'h-[52px]',
            'bg-gray-50',
            'p-[8px]',
            'text-black',
            ERROR_BOX_CONFIG[status],
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
        {!noStatusMessage && (
          <div className={clsx(STATUS_CONFIG[status])}>
            {renderStatusMessage()}
          </div>
        )}
      </div>
    )
  },
)

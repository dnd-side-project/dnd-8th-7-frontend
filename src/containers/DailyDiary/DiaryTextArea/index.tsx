import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'
import clsx from 'clsx'

export default forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>(
  function DiaryTextArea(
    { placeholder = '오늘 하루가 어땠는지 간단하게 적어보세요', ...props },
    ref,
  ) {
    const [value, setValue] = useState(props?.defaultValue?.toString() || '')

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = !!props?.maxLength
        ? e.target.value.slice(0, props.maxLength)
        : e.target.value
      setValue(newValue)
      props?.onChange?.(e)
    }

    return (
      <div
        className={clsx(
          'bg-gray-50',
          'rounded-lg',
          'w-full',
          'h-[148px]',
          'px-[18px]',
          'py-[14px]',
        )}
      >
        <textarea
          ref={ref}
          className={clsx(
            'w-full',
            'h-full',
            'bg-gray-50',
            'placeholder:text-textGray-50',
            'resize-none',
            'text-black',
          )}
          {...props}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    )
  },
)

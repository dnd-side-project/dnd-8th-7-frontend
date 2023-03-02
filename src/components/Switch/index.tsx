import clsx from 'clsx'
import { ChangeEvent, ComponentProps } from 'react'

interface Props extends Omit<ComponentProps<'input'>, 'onChange'> {
  onChange?: (value: boolean) => void
}

export default function Switch({ onChange, ...props }: Props) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange?.(target.checked)
  }

  return (
    <label className="relative inline-flex items-center">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        {...props}
        onChange={handleChange}
      />
      <div
        className={clsx(
          'w-[40px]',
          'h-[20px]',
          'bg-gray-200',
          'rounded-[20px]',
          'peer',
          'peer-checked:bg-red',
          'px-[2px]',
          'py-[2px]',
          'transition-all',
          'ease-in-out',

          "after:content-['']",
          'after:absolute',
          'after:bg-white',
          'after:rounded-full',
          'after:h-[16px]',
          'after:w-[16px]',
          'after:transition-all',
          'after:ease-in-out',

          'peer-checked:after:translate-x-[20px]',
        )}
      ></div>
    </label>
  )
}

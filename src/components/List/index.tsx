import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

import { noop } from '@/utils'

import { ArrowRightIcon } from '@/components/Icons'

interface ListProps {
  items?: Array<Itemtype>
  onItemClick?: (key: Key) => void
}

export default function List({ items, onItemClick = noop }: ListProps) {
  return (
    <ul className={clsx('text-black')}>
      {items?.map((item) => (
        <Item
          key={item.id}
          {...item}
          buttonProps={{ onClick: () => onItemClick(item.id) }}
        />
      ))}
    </ul>
  )
}

type Key = string
interface Itemtype {
  id: Key
  title?: ReactNode
  arrowIcon?: boolean
}
interface ItemProps extends Itemtype {
  buttonProps?: ComponentProps<'button'>
}
function Item({ title = '', arrowIcon = true, buttonProps }: ItemProps) {
  return (
    <li className={'w-full'}>
      <button
        {...buttonProps}
        className={clsx(
          'flex',
          'justify-between',
          'w-full',
          'p-5',
          'active:bg-gray-50',
          'transition-all',
        )}
      >
        {title}
        {arrowIcon && (
          <ArrowRightIcon className={'ml-[10px] fill-textGray-50'} />
        )}
      </button>
    </li>
  )
}

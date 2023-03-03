import clsx from 'clsx'
import { PropsWithChildren, ReactNode } from 'react'
import { ArrowLeftIcon, ExitIcon, MoreVerticalIcon } from '@/components/Icons'
import { noop } from '@/utils'

export const buttonOptions = ['none', 'exit', 'more', 'back', 'delete'] as const
type ButtonType = (typeof buttonOptions)[number]

interface Props {
  title: string
  leftButton?: ButtonType
  rightButton?: ButtonType
  onLeftButtonClick?: () => void
  onRightButtonClick?: () => void
}

const Header = ({
  title,
  leftButton = 'none',
  rightButton = 'none',
  onLeftButtonClick = noop,
  onRightButtonClick = noop,
}: Props) => {
  return (
    <header
      className={clsx(
        'inner',
        'fixed',
        'flex',
        'top-0',
        'left-0',
        'right-0',
        'items-center',
        'justify-center',
        'z-10',
        'w-full',
        'h-[56px]',
        'px-5',
        'bg-white',
      )}
    >
      <HeaderButton type={leftButton} onClick={onLeftButtonClick} />
      <p className="text-black text-xl font-bold flex-1  text-center">
        {title}
      </p>
      <HeaderButton type={rightButton} onClick={onRightButtonClick} />
    </header>
  )
}

const ButtonIcon = ({ type }: { type: ButtonType }) => {
  if (type === 'exit') return <ExitIcon />
  if (type === 'more') return <MoreVerticalIcon />
  if (type === 'back') return <ArrowLeftIcon />
  if (type === 'delete') return <div>삭제</div>
  else return null
}

const HeaderButton = ({
  type,
  onClick,
}: PropsWithChildren<{ type: ButtonType; onClick?: () => void }>) => {
  return (
    <button type="button" className="min-w-[24px]" onClick={onClick}>
      <ButtonIcon type={type} />
      {/* {typeof type === 'string' && isButtonType(type) ? (
        <ButtonIcon type={type} />
      ) : (
        <>{type}</>
      )} */}
    </button>
  )
}

const isButtonType = (type: string): type is ButtonType => {
  return !!buttonOptions.find((option) => option === type)
}

export default Header

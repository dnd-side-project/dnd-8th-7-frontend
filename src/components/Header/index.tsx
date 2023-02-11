import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ArrowLeftIcon, ExitIcon, MoreVerticalIcon } from '@/components/Icons'
import { PropsWithChildren } from 'react'

export const buttonOptions = ['none', 'exit', 'more', 'back'] as const
type HeaderButton = (typeof buttonOptions)[number]

interface Props {
  title: string
  leftButton?: HeaderButton
  rightButton?: HeaderButton
}

const HeaderButton = ({ type }: { type: HeaderButton }) => {
  if (type === 'exit') return <ExitButton />
  if (type === 'more') return <MoreButton />
  if (type === 'back') return <BackButton />
  else return null
}

const Header = ({
  title,
  leftButton = 'back',
  rightButton = 'none',
}: Props) => {
  return (
    <header
      className={clsx(
        'fixed',
        'flex',
        'items-center',
        'justify-center',
        'z-10',
        'w-full',
        'h-[56px]',
        'px-5',
      )}
    >
      <div className="min-w-[24px]">
        <HeaderButton type={leftButton} />
      </div>
      <p className="text-black text-2xl font-bold min-w-[calc(100%_-_40px)] text-center">
        {title}
      </p>
      <div className="min-w-[24px]">
        <HeaderButton type={rightButton} />
      </div>
    </header>
  )
}

const ButtonWrapper = ({
  onClick,
  children,
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center"
    >
      {children}
    </button>
  )
}

const BackButton = () => {
  const { back } = useRouter()
  return (
    <ButtonWrapper onClick={back}>
      <ArrowLeftIcon />
    </ButtonWrapper>
  )
}

const MoreButton = () => {
  return (
    <ButtonWrapper onClick={() => {}}>
      <MoreVerticalIcon />
    </ButtonWrapper>
  )
}

const ExitButton = () => {
  return (
    <ButtonWrapper onClick={() => {}}>
      <ExitIcon />
    </ButtonWrapper>
  )
}

export default Header

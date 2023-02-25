import clsx from 'clsx'

import PreparingSvg from 'public/assets/icons/preparing.svg'

interface Props {
  text?: string
  outlined?: boolean
}

const Preparing = ({
  text = `열심히 개발하고 있어요${'\n'}조금만 기다려주세요!`,
  outlined = false,
}: Props) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'rounded-lg',
        'py-8',
        'select-none',
        { 'border border-dashed border-textGray-50': outlined },
      )}
    >
      <PreparingSvg />
      <p
        className={clsx(
          'text-lg',
          'text-center',
          'text-textGray-50',
          'whitespace-pre-line',
          'mt-[17px]',
        )}
      >
        {text}
      </p>
    </div>
  )
}

export default Preparing

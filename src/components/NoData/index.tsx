import clsx from 'clsx'

interface Props {
  text?: string
  outlined?: boolean
}

const NoData = ({ text = '등록된 블록이 없어요', outlined = false }: Props) => {
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
      <img src="/assets/images/no_data.png" width={88} height={72} alt="" />
      <p
        className={clsx(
          'text-base',
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

export default NoData

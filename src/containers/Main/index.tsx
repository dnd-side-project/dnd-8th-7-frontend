import clsx from 'clsx'

const Main = () => {
  return (
    <div
      className={clsx(
        'bg-red',
        'h-[100vh]',
        'w-[100vw]',
        'absolute',
        'top-0',
        'left-0',
        'overflow-auto',
      )}
    >
      <div
        className={clsx(
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'text-white',
          'p-[100px]',
        )}
      >
        <div
          className={clsx(
            'flex',
            'items-center',
            'justify-center',
            'text-white',
            'p-[100px]',
          )}
        >
          <div className={clsx('mr-[100px]')}>
            <h4 className={clsx('text-[30px]', 'font-[500]')}>
              복잡한 일상을 심플하게
            </h4>
            <h1 className={clsx('text-[100px]', 'font-[700]')}>하루블럭</h1>
          </div>
          <img src="/assets/images/demo.png" width={300} height={1000} alt="" />
        </div>

        <div>
          <div>문의 : harublock.app@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Main

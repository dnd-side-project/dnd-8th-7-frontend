import Button from '@/components/Button'
import clsx from 'clsx'

const TITLE_STYLE = 'text-3xl font-[600] mb-[10px]'
const DESCRIPTION_STYLE = 'mb-[6px]'

const APP_DOWNLOAD_URL =
  'https://drive.google.com/file/d/1Af7wHA7Lf4H0De9qJrAkv7yvoENbdMli/view?usp=sharing'

const Main = () => {
  const handleButtonClick = () => {
    window.open(APP_DOWNLOAD_URL, '_blank')
  }

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'items-center',
        'p-[20px]',
        'text-center',
        'gap-[40px]',
      )}
    >
      <div className={clsx(TITLE_STYLE)}>
        관심가져 주셔서
        <br />
        감사합니다🙏
      </div>
      <div className={clsx('flex')}>
        <Button onClick={handleButtonClick}>하루 블럭 다운 받기</Button>
      </div>
      <div>
        <img src={'/assets/images/nemoni.png'} width={300} />
      </div>
      <div className={clsx('mt-[30px]')}>
        <div className={TITLE_STYLE}>앱 다운 후, 확인해주세요</div>
        <div className={DESCRIPTION_STYLE}>
          1. 출처를 알 수 없는 앱 설치 허용하기
        </div>
        <img src={'/assets/images/android_screenshot_1.jpg'} width={300} />
        <div className={'h-[20px]'}></div>
        <div className={DESCRIPTION_STYLE}>2. Google Play 프로텍트 꺼두기</div>
        <img src={'/assets/images/android_screenshot_2.jpg'} width={300} />
      </div>
    </div>
  )
}

export default Main

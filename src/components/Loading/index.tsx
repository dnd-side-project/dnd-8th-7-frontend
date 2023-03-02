import { ComponentProps, PropsWithoutRef, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function Loading(props: PropsWithoutRef<ComponentProps<'div'>>) {
  const mount = useRef(false)
  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mount.current && lottieRef.current) {
      mount.current = true
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('public/assets/lotties/loading.json'),
      })
    }
  }, [])

  return <div ref={lottieRef} {...props}></div>
}

import { useEffect } from 'react'

export default function useVisibilityChange(onVisibility: () => void) {
  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
    }
  })
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import msw from '@/mocks'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  msw()
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

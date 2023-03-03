import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import msw from '@/mocks'
import { BaseLayout } from '@/components/Layout'

import '@/styles/globals.css'
import webBridge from '@/utils/react-native-webview-bridge'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  msw()
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    webBridge.init()
    return () => {
      webBridge.unmount()
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

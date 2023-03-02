declare global {
  interface Window {
    ReactNativeWebView: any
  }
}

export const ReactNativeWebView = window.ReactNativeWebView

async function init() {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    const { server } = await import('@/mocks/server')
    server.listen()
  } else {
    const { worker } = await import('@/mocks/browser')
    worker.start()
  }
}

export default init

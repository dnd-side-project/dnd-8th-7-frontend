import { AxiosError } from 'axios'
import { useState } from 'react'

export type IHttpRequestReturn<T, H = void> = [
  T | undefined,
  (payload?: H, callbacks?: CallbackFunctions<T>) => Promise<T>,
  boolean,
  boolean,
  boolean,
  number,
]
type CallbackFunctions<T> = {
  onError?: (e: AxiosError) => unknown
  onSuccess?: (res: T) => unknown
  onFinished?: () => unknown
}

export default function useHttpRequest<T, H = void>(
  dataFetchCallback: (payload?: H) => Promise<T>,
  initialValue?: T,
): IHttpRequestReturn<T, H> {
  const [loading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [fetchCount, setFetchCount] = useState(0)
  const [data, setData] = useState<T | undefined>(initialValue)

  async function fetch(payload?: H, callbacks?: CallbackFunctions<T>) {
    setLoading(true)

    return dataFetchCallback?.(payload)
      .then((data) => {
        setData(data)
        setSuccess(true)
        setError(false)
        callbacks?.onSuccess?.(data)
        return data
      })
      .catch((e) => {
        setSuccess(false)
        setError(true)
        callbacks?.onError?.(e) || console.error(e)
        throw e
      })
      .finally(() => {
        setLoading(false)
        setFetchCount((current) => current + 1)
        callbacks?.onFinished?.()
      })
  }

  return [data, fetch, loading, isSuccess, isError, fetchCount]
}

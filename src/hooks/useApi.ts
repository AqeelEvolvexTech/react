import { useCallback, useEffect, useState } from 'react'
import { toErrorMessage } from '@/lib/errors'

interface ApiState<T> {
  data: T | null
  isLoading: boolean
  error: string
  refetch: () => void
}

export const useApi = <T>(fetcher: () => Promise<T>, deps: readonly unknown[] = []): ApiState<T> => {
  const key = JSON.stringify(deps)
  const [state, setState] = useState<{ data: T | null; isLoading: boolean; error: string }>({
    data: null,
    isLoading: true,
    error: '',
  })
  const [prevKey, setPrevKey] = useState(key)
  const [tick, setTick] = useState(0)

  // Reset state during render when deps change (React's "adjust state" pattern)
  if (prevKey !== key) {
    setPrevKey(key)
    setState({ data: null, isLoading: true, error: '' })
  }

  useEffect(() => {
    const controller = new AbortController()

    fetcher()
      .then((data) => {
        if (!controller.signal.aborted) setState({ data, isLoading: false, error: '' })
      })
      .catch((err) => {
        if (!controller.signal.aborted) setState({ data: null, isLoading: false, error: toErrorMessage(err) })
      })

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, tick])

  const refetch = useCallback(() => {
    setState((s) => ({ ...s, isLoading: true, error: '' }))
    setTick((t) => t + 1)
  }, [])

  return { ...state, refetch }
}

export default useApi

import { describe, it, expect, vi } from 'vitest'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useApi } from '@/hooks/useApi'

describe('useApi', () => {
  it('returns data on success', async () => {
    const { result } = renderHook(() => useApi(() => Promise.resolve('hello')))

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toBe('hello')
    expect(result.current.error).toBe('')
  })

  it('returns error message on failure', async () => {
    const { result } = renderHook(() => useApi(() => Promise.reject(new Error('Failed'))))

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toBeNull()
    expect(result.current.error).toBe('Failed')
  })

  it('refetch re-runs the fetcher', async () => {
    const fetcher = vi.fn().mockResolvedValue('first')
    const { result } = renderHook(() => useApi(fetcher))

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.data).toBe('first')
    expect(fetcher).toHaveBeenCalledTimes(1)

    fetcher.mockResolvedValue('second')
    act(() => result.current.refetch())

    await waitFor(() => expect(result.current.data).toBe('second'))
    expect(fetcher).toHaveBeenCalledTimes(2)
  })
})

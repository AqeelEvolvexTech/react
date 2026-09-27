import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'
import { ApiError, NetworkError, toErrorMessage } from '@/lib/errors'

describe('cn', () => {
  it('joins truthy strings', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('filters out falsy values', () => {
    expect(cn('a', undefined, null, false, 'b')).toBe('a b')
  })

  it('returns empty string for no input', () => {
    expect(cn()).toBe('')
  })
})

describe('ApiError', () => {
  it('creates error with message and status', () => {
    const err = new ApiError('Not found', 404)
    expect(err.message).toBe('Not found')
    expect(err.status).toBe(404)
    expect(err.name).toBe('ApiError')
    expect(err).toBeInstanceOf(Error)
  })
})

describe('NetworkError', () => {
  it('creates network error with default message', () => {
    const err = new NetworkError()
    expect(err.message).toBe('Network connection failed')
    expect(err.status).toBe(0)
    expect(err).toBeInstanceOf(ApiError)
  })
})

describe('toErrorMessage', () => {
  it('extracts message from ApiError', () => {
    expect(toErrorMessage(new ApiError('Server error', 500))).toBe('Server error')
  })

  it('extracts message from generic Error', () => {
    expect(toErrorMessage(new Error('Oops'))).toBe('Oops')
  })

  it('returns fallback for unknown errors', () => {
    expect(toErrorMessage('string')).toBe('Something went wrong')
    expect(toErrorMessage(null)).toBe('Something went wrong')
  })
})

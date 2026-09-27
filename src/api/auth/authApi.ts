import type { AuthResponse, LoginCredentials } from '@/types/auth.types'

const MOCK_USERS = [
  { id: '1', email: 'admin@example.com', password: '123456', name: 'Admin User' },
  { id: '2', email: 'user@example.com', password: '123456', name: 'Regular User' },
]

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

const generateToken = (id: string, email: string): string =>
  btoa(JSON.stringify({ sub: id, email, exp: Date.now() + 86400000 }))

export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  await delay(800)

  const found = MOCK_USERS.find((u) => u.email === credentials.email && u.password === credentials.password)

  if (!found) {
    throw new Error('Invalid email or password')
  }

  const token = generateToken(found.id, found.email)

  return {
    user: { id: found.id, email: found.email, name: found.name, token },
    token,
  }
}

export default { loginUser }

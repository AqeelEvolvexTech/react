import type { BlogListParams, BlogPost } from '@/types/blog.types'

const TITLES = [
  'Getting Started with React',
  'Understanding TypeScript',
  'State Management Patterns',
  'Routing in React',
  'Component Design',
  'Performance Optimization',
  'Testing Strategies',
  'Deployment Guide',
  'CSS with Tailwind',
  'API Integration',
]
const AUTHORS = ['Jane Doe', 'John Smith', 'Alice Johnson', 'Bob Williams']

const MOCK_BLOGS: BlogPost[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}: ${TITLES[i % TITLES.length]!}`,
  excerpt: `Detailed excerpt for blog post ${i + 1}. Key concepts and actionable insights.`,
  content: `# Blog Post ${i + 1}\n\nFull content of blog post ${i + 1}.\n\n## Key Points\n\n- Concept one\n- Concept two\n- Concept three\n\n## Conclusion\n\nSummary and next steps.`,
  author: AUTHORS[i % AUTHORS.length]!,
  date: new Date(2025, 0, i + 1).toISOString().split('T')[0]!,
  imageUrl: `https://picsum.photos/seed/${i + 1}/800/400`,
}))

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

export const getBlogs = async (params?: BlogListParams): Promise<{ posts: BlogPost[]; total: number }> => {
  await delay(500)

  let filtered = [...MOCK_BLOGS]

  if (params?.search) {
    const q = params.search.toLowerCase()
    filtered = filtered.filter((b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q))
  }

  const page = params?.page ?? 1
  const limit = params?.limit ?? 9
  const start = (page - 1) * limit

  return { posts: filtered.slice(start, start + limit), total: filtered.length }
}

export const getBlogById = async (id: number): Promise<BlogPost | null> => {
  await delay(300)
  return MOCK_BLOGS.find((b) => b.id === id) ?? null
}

export default { getBlogs, getBlogById }

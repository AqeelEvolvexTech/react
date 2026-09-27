import { type ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { getBlogById } from '@/api/blog/blogApi'
import useApi from '@/hooks/useApi'
import Spinner from '@/components/ui/Spinner'
import Alert from '@/components/ui/Alert'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import ROUTES from '@/config/constants'
import type { BlogPost } from '@/types/blog.types'

const renderContent = (content: string): ReactNode =>
  content.split('\n').map((p, i) => {
    if (p.startsWith('# '))
      return (
        <h1 key={i} className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          {p.slice(2)}
        </h1>
      )
    if (p.startsWith('## '))
      return (
        <h2 key={i} className="mb-3 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {p.slice(3)}
        </h2>
      )
    if (p.startsWith('- '))
      return (
        <ul key={i} className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>{p.slice(2)}</li>
        </ul>
      )
    if (p.trim())
      return (
        <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
          {p}
        </p>
      )
    return null
  })

export const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: post, isLoading, error } = useApi<BlogPost | null>(() => getBlogById(Number(id)), [id])

  if (isLoading)
    return (
      <div className="flex justify-center py-12">
        <Spinner size="lg" />
      </div>
    )

  if (error)
    return (
      <div className="space-y-4">
        <Alert variant="error">{error}</Alert>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    )

  if (!post) return <Alert variant="info">Blog post not found.</Alert>

  return (
    <article>
      <Link
        to={ROUTES.BLOGS}
        className="mb-4 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
      >
        <Icon name="arrow-left" className="size-4" />
        Back to Blogs
      </Link>

      <img src={post.imageUrl} alt={post.title} loading="lazy" decoding="async" className="mb-6 h-64 w-full rounded-xl object-cover sm:h-80" />

      <div className="mb-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{post.author}</span>
        <span>&middot;</span>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      </div>

      <div className="prose prose-gray max-w-none dark:prose-invert">{renderContent(post.content)}</div>
    </article>
  )
}

export default BlogDetailPage

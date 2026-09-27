import { useEffect, useState } from 'react'
import { getBlogs } from '@/api/blog/blogApi'
import BlogCard from '@/components/blog/BlogCard'
import Header from '@/layouts/Header'
import Spinner from '@/components/ui/Spinner'
import Alert from '@/components/ui/Alert'
import Input from '@/components/ui/Input'
import type { BlogPost } from '@/types/blog.types'

const paginationBtn = 'rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'

export const BlogsPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const limit = 9

  useEffect(() => {
    const controller = new AbortController()

    const fetchPosts = async () => {
      setIsLoading(true)
      setError('')
      try {
        const result = await getBlogs({ page, limit, search: search || undefined })
        if (!controller.signal.aborted) {
          setPosts(result.posts)
          setTotal(result.total)
        }
      } catch (err) {
        if (!controller.signal.aborted) setError(err instanceof Error ? err.message : 'Failed to load blogs')
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    fetchPosts()
    return () => controller.abort()
  }, [page, search, limit])

  const totalPages = Math.ceil(total / limit)

  return (
    <>
      <Header title="Blogs" description="Explore our latest articles and tutorials" />

      <div className="mb-6">
        <Input placeholder="Search blogs..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1) }} className="max-w-md" />
      </div>

      {isLoading && <div className="flex justify-center py-12"><Spinner size="lg" /></div>}
      {error && <Alert variant="error">{error}</Alert>}
      {!isLoading && !error && posts.length === 0 && <Alert variant="info">No blog posts found.</Alert>}

      {!isLoading && !error && posts.length > 0 && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className={paginationBtn}>Previous</button>
              <span className="text-sm text-gray-600 dark:text-gray-400">Page {page} of {totalPages}</span>
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className={paginationBtn}>Next</button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default BlogsPage

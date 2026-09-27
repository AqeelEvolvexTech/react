import { Link } from 'react-router'
import type { BlogPost } from '@/types/blog.types'
import ROUTES from '@/config/constants'

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      to={ROUTES.BLOG_DETAIL.replace(':id', String(post.id))}
      className="group block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="mb-3 overflow-hidden rounded-lg">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-40 w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
        {post.title}
      </h3>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </Link>
  )
}

export default BlogCard

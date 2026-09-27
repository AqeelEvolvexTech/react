export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  imageUrl: string
}

export interface BlogListParams {
  page?: number
  limit?: number
  search?: string
}

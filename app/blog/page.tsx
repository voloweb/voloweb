import { wisp } from '@/lib/wisp'
import { BlogPostsPreview } from '@/components/Blog/BlogPostPreview'
import { BlogPostsPagination } from '@/components/Blog/BlogPostsPagination'

const Blog = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1
  const result = await wisp.getPosts({ limit: 3, page })

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <BlogPostsPreview posts={result.posts} />
        <BlogPostsPagination pagination={result.pagination} />
      </div>
    </div>
  )
}

export default Blog

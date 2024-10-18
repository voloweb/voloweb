import { wisp } from '@/lib/wisp'
import { BlogPostsPagination } from '@/components/Blog/BlogPostsPagination'
import { formatDate } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

const Blog = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const page = searchParams.page ? Number(searchParams.page) : 1
  const query = searchParams.query ? String(searchParams.query) : ''
  const result = await wisp.getPosts({ limit: 8, page, query })

  return (
    <div className="wave wave-blog-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-5">
        <h2 className="font-medium leading-tight text-neutra-700 mb-5">Blog</h2>
        {query && <span className="block mb-5">Resultdo da pesquisa...</span>}

        {!result.posts.length && (
          <span className="block text-center mb-5">
            Nenhum item encontrado!
          </span>
        )}

        <div className="cards">
          {result.posts.map((post, i) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className={`card content
                ${page === 1 && !query && i === 0 && 'card-inicial'}
                ${page === 1 && !query && i === 3 && 'card-final'}`}
            >
              <div className="card-content">
                <div className="card-img">
                  <Image
                    alt={post.title}
                    src={post.image || ''}
                    fill
                    sizes="100%"
                  />
                </div>
                <div className="card-label rounded-md">
                  {formatDate(post.publishedAt || post.updatedAt, 'dd/MM/yyyy')}
                </div>
                <div className="card-title">{post.title}</div>
              </div>
            </Link>
          ))}
        </div>

        {!!result.posts.length && result.pagination.totalPages !== 1 && (
          <BlogPostsPagination pagination={result.pagination} />
        )}
      </div>
    </div>
  )
}

export default Blog

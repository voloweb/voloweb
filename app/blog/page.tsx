/* eslint-disable prettier/prettier */
import { BlogPostsPagination } from '@/components/Blog/BlogPostsPagination'
import { formatDate } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { GetPostResult } from '@wisp-cms/client'

const Blog = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const limit = 8
  const page = searchParams.page ? Number(searchParams.page) : 1
  const query = searchParams.query ? String(searchParams.query) : ''
  const tags = searchParams.tags ? String(searchParams.tags).split(',') : []

  const baseApi = `${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/${process.env.NEXT_PUBLIC_BLOG_ID}`
  const path = `${baseApi}/posts?limit=${limit}&page=${page}&query=${query}&tags=${tags}`
  // 1 hour
  const res = await fetch(path, { next: { revalidate: 3600 } })
  const result = await res.json();

  const basePathPagination = `blog?query=${query}&tags=${String(tags)}&page=`

  return (
    <div className="wave wave-blog-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-5">
        <h2 className="font-medium leading-tight text-neutra-700 mb-5">Blog</h2>
        {(query || !!tags.length) && (
          <span className="block mb-5">Resultdo da pesquisa...</span>
        )}

        {!result.posts.length && (
          <span className="block text-center mb-5">
            Nenhum item encontrado!
          </span>
        )}

        <div className="cards">
          {result.posts.map((post: GetPostResult['post'], i: number) => (
            <Link
              href={`/blog/${post?.slug}`}
              key={post?.id}
              className={`card content col-span-4 md:col-span-2 lg:col-span-1
                ${page === 1 && !query && !tags.length && i === 0 && 'col-span-4 row-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2'}
                ${page === 1 && !query && !tags.length && i === 3 && 'col-span-4 md:col-span-2 lg:col-span-2'}
              `}
            >
              <div className="card-content">
                <div className="card-img">
                  <Image
                    alt={post?.title || ''}
                    src={post?.image || ''}
                    fill
                    sizes="100%"
                  />
                </div>
                <div className="card-label rounded-md">
                  {(post?.publishedAt || post?.updatedAt) && formatDate(post?.publishedAt || post?.updatedAt, 'dd/MM/yyyy')}
                </div>
                <div className="card-title">{post?.title}</div>
              </div>
            </Link>
          ))}
        </div>

        {!!result.posts.length && result.pagination.totalPages !== 1 && (
          <BlogPostsPagination
            pagination={result.pagination}
            basePath={basePathPagination}
          />
        )}
      </div>
    </div>
  )
}

export default Blog

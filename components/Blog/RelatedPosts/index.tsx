'use client'
// import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import type { GetRelatedPostsResult } from '@wisp-cms/client'
import { formatDate } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import type { FunctionComponent } from 'react'

export const RelatedPosts: FunctionComponent<{
  posts: GetRelatedPostsResult['posts']
}> = ({ posts }) => {
  if (posts.length === 0) {
    return null
  }

  return (
    <div className="related-posts">
      <div className="my-5 text-lg font-semibold tracking-tight">
        Posts relacionados
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {posts.slice(0, 3).map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="card content"
          >
            <div className="card-content">
              <div className="card-img">
                <Image alt={post.title} src={post.image || ''} fill />
              </div>
              <div className="card-label rounded-md">
                {formatDate(post.publishedAt || post.updatedAt, 'dd/MM/yyyy')}
              </div>
              <div className="card-title">{post.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

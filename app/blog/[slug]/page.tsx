/* eslint-disable prettier/prettier */
import { RelatedPosts } from '@/components/Blog/RelatedPosts'
import { notFound } from 'next/navigation'
import type { BlogPosting, WithContext } from 'schema-dts'
import { formatDate } from 'date-fns'
import Image from 'next/image'
import { PostContent } from '@/components/Blog/PostContent'
import Link from 'next/link'
import { TagInPost } from '@wisp-cms/client'

import './style.css'
import { Share } from '@/components/Blog/Share'

export async function generateMetadata({
  params: { slug }
}: {
  params: Params
}) {
  const baseApi = `${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/${process.env.NEXT_PUBLIC_BLOG_ID}`
  const path = `${baseApi}/posts/${slug}`

  //12 hours
  const res = await fetch(path, { next: { revalidate: 43200 } })
  const result = await res.json()

  if (!result || !result.post) {
    return {
      title: 'Blog post not found'
    }
  }

  const { title, description, image } = result.post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/icone-volo.png`]
    }
  }
}

interface Params {
  slug: string
}

const Page = async ({ params: { slug } }: { params: Params }) => {
  const baseApi = `${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/${process.env.NEXT_PUBLIC_BLOG_ID}`

  //12 hours
  const path = `${baseApi}/posts/${slug}`
  const res = await fetch(path, { next: { revalidate: 43200 } })
  const result = await res.json()

  // 1 hour
  const pathRelatedPosts = `${baseApi}/posts/${slug}/related?limit=3`
  const resRelatedPosts = await fetch(pathRelatedPosts, { next: { revalidate: 3600 } })
  let resultRelatedPosts = await resRelatedPosts.json()
  resultRelatedPosts = resultRelatedPosts.posts

  if (!result || !result.post) {
    return notFound()
  }

  const {
    title,
    description,
    publishedAt,
    createdAt,
    updatedAt,
    image,
    author,
    content,
    tags
  } = result.post

  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: image ? image : undefined,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      '@type': 'Person',
      name: author.name ?? undefined,
      image: author.image ?? undefined
    }
  }

  return (
    <div className="wave wave-blog-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Share url={`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/${slug}`} />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-5">
        <div className="prose lg:prose-xl dark:prose-invert mx-auto break-words">
          <h1 className="my-4">{title}</h1>
          {description && <p>{description}</p>}

          <div className="blog-post">
            <PostContent content={content} />
          </div>

          <hr className="my-5" />

          <div className="autor flex items-center gap-4 my-4">
            <div className="w-10 h-10">
              <Image
                className="rounded-full"
                alt="Avatar do autor"
                src={author.image || ''}
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm opacity-80">{author.name}</span>
              <span className="text-sm opacity-80">
                {formatDate(publishedAt || createdAt, 'dd/MM/yyyy')}
              </span>
            </div>
          </div>

          <div className="opacity-80 text-sm">
            {tags.map((tag: TagInPost) => (
              <Link
                key={tag.id}
                href={`/blog?tags=${tag.name}`}
                className="text-primary mr-2"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </div>

        <RelatedPosts posts={resultRelatedPosts} />
      </div>
    </div>
  )
}

export default Page

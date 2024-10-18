import { RelatedPosts } from '@/components/Blog/RelatedPosts'
import { config } from '@/config'
import { signOgImageUrl } from '@/lib/og-image'
import { wisp } from '@/lib/wisp'
import { notFound } from 'next/navigation'
import type { BlogPosting, WithContext } from 'schema-dts'
import { formatDate } from 'date-fns'
import Image from 'next/image'
import { PostContent } from '@/components/Blog/PostContent'

export async function generateMetadata({
  params: { slug }
}: {
  params: Params
}) {
  const result = await wisp.getPost(slug)
  if (!result || !result.post) {
    return {
      title: 'Blog post not found'
    }
  }

  const { title, description, image } = result.post
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name })

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [generatedOgImage, image] : [generatedOgImage]
    }
  }
}

interface Params {
  slug: string
}

const Page = async ({ params: { slug } }: { params: Params }) => {
  const result = await wisp.getPost(slug)
  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 })

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
      <div
        id="blog-post"
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-5"
      >
        <div className="prose lg:prose-xl dark:prose-invert mx-auto break-words">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          <PostContent content={content} />

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
            {tags.map((tag) => (
              <span key={tag.id} className="text-primary mr-2">
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        <RelatedPosts posts={posts} />
      </div>
    </div>
  )
}

export default Page

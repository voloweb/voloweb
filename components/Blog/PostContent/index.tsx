import sanitize, { defaults } from 'sanitize-html'

export const PostContent = ({ content }: { content: string }) => {
  const sanitizedContent = sanitize(content, {
    allowedTags: [
      'b',
      'i',
      'em',
      'strong',
      'a',
      'hr',
      'img',
      'h1',
      'h2',
      'h3',
      'code',
      'p',
      'li',
      'ul',
      'ol',
      'blockquote',
      'td',
      'th',
      'table',
      'tr',
      'tbody',
      'thead',
      'tfoot',
      'small',
      'div',
      'iframe'
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      '*': ['style'],
      iframe: ['src', 'allowfullscreen', 'style']
    },
    allowedIframeHostnames: ['www.youtube.com', 'www.youtube-nocookie.com']
  })
  return (
    <div
      className="blog-content mx-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    ></div>
  )
}

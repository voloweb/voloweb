import Link from 'next/link'

export const BlogPostsPagination = ({
  pagination,
  basePath = 'blog?page=',
  numSiblingPages = 2
}: {
  basePath?: string
  numSiblingPages?: number
  pagination: {
    page: number
    limit: number | 'all'
    totalPages: number
    nextPage: number | null
    prevPage: number | null
  }
}) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex gap-4">
        {pagination.prevPage && (
          <li>
            <Link href={`${basePath}${pagination.prevPage}`}>Anterior</Link>
          </li>
        )}
        {pagination.page > 3 && (
          <li className="flex gap-4">
            <Link href={`${basePath}1`}>1</Link>
            <span>...</span>
          </li>
        )}
        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1)
          .filter(
            (pageNumber) =>
              Math.abs(pagination.page - pageNumber) <= numSiblingPages
          )
          .map((pageNumber) => (
            <li key={pageNumber}>
              <Link
                className={
                  pageNumber === pagination.page ? 'active bg-gray-400' : ''
                }
                href={`${basePath}${pageNumber}`}
              >
                {pageNumber}
              </Link>
            </li>
          ))}
        {pagination.page < pagination.totalPages - 2 && (
          <li className="flex gap-4">
            <span>...</span>
            <Link href={`${basePath}${pagination.totalPages}`}>
              {pagination.totalPages}
            </Link>
          </li>
        )}
        {pagination.nextPage && (
          <li>
            <Link href={`${basePath}${pagination.nextPage}`}>Próxima</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

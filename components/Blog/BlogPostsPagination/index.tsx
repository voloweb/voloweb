import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const BlogPostsPagination = ({
  pagination,
  basePath = 'blog?page=',
  numSiblingPages = 1
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
      className="navigation-blog mx-auto flex w-full justify-center p-10"
    >
      <ul className="flex gap-1">
        {pagination.prevPage && (
          <li>
            <Link
              className="flex items-center justify-center px-3 h-8 ms-0 rounded-md leading-tight text-semantica-1 rounded-s-lg hover:bg-semantica-1 hover:text-white"
              href={`${basePath}${pagination.prevPage}`}
            >
              <ArrowLeftIcon className="block h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        )}
        {pagination.page > 3 && (
          <li className="flex gap-1">
            <Link
              className="flex items-center justify-center px-3 h-8 rounded-md leading-tight text-semantica-1 hover:bg-semantica-1 hover:text-white"
              href={`${basePath}1`}
            >
              1
            </Link>
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
                className={`
                  flex items-center justify-center px-3 h-8 rounded-md leading-tight
                  ${
                    pageNumber === pagination.page
                      ? 'bg-semantica-1 text-white hover:text-white hover:bg-semantica-1'
                      : 'text-semantica-1 hover:bg-semantica-1 hover:text-white'
                  }
                `}
                href={`${basePath}${pageNumber}`}
              >
                {pageNumber}
              </Link>
            </li>
          ))}
        {pagination.page < pagination.totalPages - 2 && (
          <li className="flex gap-1">
            <span>...</span>
            <Link
              className="flex items-center justify-center px-3 h-8 rounded-md leading-tight text-semantica-1 hover:bg-semantica-1 hover:text-white"
              href={`${basePath}${pagination.totalPages}`}
            >
              {pagination.totalPages}
            </Link>
          </li>
        )}
        {pagination.nextPage && (
          <li>
            <Link
              className="flex items-center justify-center px-3 h-8 ms-0 rounded-md leading-tight text-semantica-1 rounded-e-lg hover:bg-semantica-1 hover:text-white"
              href={`${basePath}${pagination.nextPage}`}
            >
              <ArrowRightIcon className="block h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

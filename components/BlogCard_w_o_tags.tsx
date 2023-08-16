import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

const BlogCard = ({ posts, MAX_DISPLAY }) => {
  return (
    <ul>
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((post) => {
        const { slug, date, title, summary, tags } = post
        return (
          <li
            key={slug}
            className="p-12 border border-gray-300 dark:border-gray-600 rounded-lg  shadow-lg mb-6"
          >
            <article className="text-center flex flex-col justify-center items-center">
              <div className="space-y-2 ">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
                <div className="space-y-5 ">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default BlogCard

import Link from '@/components/Link'

import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

// import NewsletterForm from 'pliny/ui/NewsletterForm'

import musa_avatar from '@/data/musa_avatar.png'
import BlogCard from '@/components/BlogCard_w_o_tags'
import EmailNewsLetter from '@/components/EmailNewsLetter'

const MAX_DISPLAY = 5
const { email, github, twitter, linkedin } = siteMetadata
const SOCIAL_LINKS = [
  {
    text: 'Send me an email',
    url: email,
  },
  {
    text: 'Github',
    url: github,
  },
  {
    text: 'Twitter',
    url: twitter,
  },
  {
    text: 'Linkedln',
    url: linkedin,
  },
]

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="text-center  flex flex-col justify-center items-center  space-y-2 pb-8 pt-6 md:space-y-5 mb-10">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full w-16 h-16 "
              src={musa_avatar}
              alt="Avatar of Musa A. Musa"
            />
            <p className=" text-sm mt-1 tracking-[0.25rem] leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.author.toUpperCase()}
            </p>
          </div>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            A programmer who writes about software development and many other topics. I work at{' '}
            <a href="https://vircap.io" target="_blank" className="underline decoration-solid">
              vircap.io
            </a>
            .
          </p>
          <p className="flex justify-center gap-3  text-base leading-7 text-gray-500 dark:text-gray-400">
            {SOCIAL_LINKS.map(({ text, url }) => {
              if (text === 'Send me an email')
                return (
                  <a
                    href={`mailto: ${url}`}
                    target="_blank"
                    className="underline decoration-solid"
                    key={text}
                  >
                    {text}
                  </a>
                )

              return (
                <a href={url} target="_blank" className="underline decoration-solid" key={text}>
                  {text}
                </a>
              )
            })}
          </p>
          <div className="w-[250px] mt-6 h-0 border-[0.5px] border-gray-200 dark:border-gray-600"></div>
          <EmailNewsLetter />
        </div>

        <BlogCard posts={posts} MAX_DISPLAY={MAX_DISPLAY} />
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 mt-10 pb-5">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

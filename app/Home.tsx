import Link from '@/components/Link'

import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

// import NewsletterForm from 'pliny/ui/NewsletterForm'

import musa_avatar from '@/data/musa_avatar.png'
import BlogList from '@/components/BlogList'
import EmailNewsLetter from '@/components/EmailNewsLetter'
import SocialLinks from '@/components/SocialLinks'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="text-center  flex flex-col justify-center items-center  space-y-2  pb-8  md:space-y-5 mb-10">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full w-16 h-16 "
              src={musa_avatar}
              alt="Avatar of Musa A. Musa"
            />
            {/* <p className=" text-sm mt-1 tracking-[0.25rem] leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.author.toUpperCase()}
            </p> */}
          </div>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            Hey, I am Musa 👋 nice to meet you!.
            <br /> I write weekly on product engineering, working with people and personal growth.
          </p>
          <SocialLinks />
          <div className="w-[250px] mt-6 h-0 border-[0.5px] border-gray-200 dark:border-gray-600"></div>
          <EmailNewsLetter />
        </div>

        <BlogList posts={posts} MAX_DISPLAY={MAX_DISPLAY} />
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

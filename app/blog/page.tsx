// 'use client'
// import ListLayoutWithPagination from './ListLayoutWithPagination'
import { allCoreContent, sortPosts, CoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

import BlogCard from '@/components/BlogList'
import Image from 'next/image'
import Pagination from '@/components/Pagination'

import formatDateToCustomFormat from '../../scripts/formatDate'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
  const MAX_DISPLAY: number = 5

  // return (
  //   <ListLayoutWithPagination
  //     posts={posts}
  //     initialDisplayPosts={initialDisplayPosts}
  //     pagination={pagination}
  //     title="All Posts"
  //   />
  // )
  return (
    <>
      <BlogCard
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

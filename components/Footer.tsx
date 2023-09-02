import siteMetadata from '@/data/siteMetadata'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialLinks />
        </div>
        <div className="text-center gap-2 sm:gap-0 mb-4 py-2 flex flex-col sm:flex-row space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div className="hidden sm:block">{` • `}</div>
          <div>Copyright @ {new Date().getFullYear()}, All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

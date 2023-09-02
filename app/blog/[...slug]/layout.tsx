import Header from '@/components/Header'
import siteMetadata from '@/data/siteMetadata'
import { SearchConfig, SearchProvider } from 'pliny/search'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex h-screen flex-col justify-between font-sans">
      <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
        <Header />
        <main className="mb-auto">{children}</main>
      </SearchProvider>
    </div>
  )
}

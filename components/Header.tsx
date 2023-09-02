import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="max-w-2xl xl:max-w-3xl overflow-hidden fixed top-0 z-[100] w-full bg-white dark:bg-gray-950 py-10 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <Logo />
          </Link>
        </div>
        <div className="flex items-center  leading-5 space-x-4 sm:space-x-6 relative right-10">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className=" sm:block font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
          <SearchButton />
          <ThemeSwitch />
        </div>
      </div>
    </header>
    // <header className="z-[100] fixed bg-white dark:bg-gray-950 top-0 bottom-[90%] w-[768px] flex items-center justify-between py-10 ">
    //   <div>
    //     <Link href="/" aria-label={siteMetadata.headerTitle}>
    //       <div className="flex items-center justify-between">
    //         <div className="mr-3">
    //           <Logo />
    //         </div>
    //         {typeof siteMetadata.headerTitle === 'string' ? (
    //           <div className="hidden h-6 text-2xl font-semibold sm:block">
    //             {siteMetadata.headerTitle}
    //           </div>
    //         ) : (
    //           siteMetadata.headerTitle
    //         )}
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="bg-yellow-400 flex items-center leading-5 space-x-4 sm:space-x-6">
    //     {headerNavLinks
    //       .filter((link) => link.href !== '/')
    //       .map((link) => (
    //         <Link
    //           key={link.title}
    //           href={link.href}
    //           className=" sm:block font-medium text-gray-900 dark:text-gray-100"
    //         >
    //           {link.title}
    //         </Link>
    //       ))}
    //     <SearchButton />
    //     <ThemeSwitch />
    //   </div>
    // </header>
  )
}

export default Header

'use client'

const EmailNewsLetter = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400 pb-2">
          Subscribe to get future posts via email (or grab the{' '}
          <a href="#" className="underline decoration-solid">
            RSS feed
          </a>
          )
        </p>
        <div className="flex justify-center items-center">
          <input
            placeholder="Type your email..."
            className="border-[1.5px] focus:border-blue-400 rounded-l-full  border-gray-300 bg-white px-4 py-2 placeholder:text-gray-400 text-gray-500 focus:border-[1.5px] focus:dark:border-primary-500 focus:ring-0 focus:relative focus:z-[1] dark:border-gray-900  dark:bg-gray-700 dark:text-gray-100"
          />
          <button
            type="submit"
            className="border-l-0 text-sm border-[1.5px] active:border-blue-400 active:border-l-[1.5px] border-gray-300 leading-7 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800  active:bg-blue-100 active:dark:bg-gray-600 dark:border-0 active:dark:border-[1.7px] active:dark:border-primary-500  py-[6.12px] px-4 rounded-r-full"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  )
}

export default EmailNewsLetter

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
            className="border-[1.5px] border-gray-200  rounded-l-full placeholder:text-sm focus:border-sky-200"
          />
          <button
            type="submit"
            className="border-l-0 text-sm border-[1.5px] active:border-blue-300 border-gray-300 leading-7 text-gray-500 dark:text-gray-400 bg-gray-100 active:bg-blue-100  py-[6.12px] px-4 rounded-r-full"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  )
}

export default EmailNewsLetter

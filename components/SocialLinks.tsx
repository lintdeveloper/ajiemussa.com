import siteMetadata from '@/data/siteMetadata'
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

const SocialLinks = () => {
  return (
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
  )
}

export default SocialLinks

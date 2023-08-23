import siteMetadata from '@/data/siteMetadata'
const { email, github, twitter, linkedin } = siteMetadata
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

const SOCIAL_LINKS = [
  {
    icon: <UilEnvelope />,
    url: email,
  },
  {
    icon: <UilGithub />,
    url: github,
  },
  {
    icon: <UilTwitterAlt />,
    url: twitter,
  },
  {
    icon: <UilLinkedin />,
    url: linkedin,
  },
]

const SocialLinks = () => {
  return (
    <p className="flex justify-center gap-5  text-base leading-7 text-gray-500 dark:text-gray-400">
      {SOCIAL_LINKS.map(({ icon, url }) => {
        return (
          <a href={url} target="_blank" className="underline decoration-solid" key={url}>
            {icon}
          </a>
        )
      })}
    </p>
  )
}

export default SocialLinks

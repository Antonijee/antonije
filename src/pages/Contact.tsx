import { profileData } from '@/data'

const Contact = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-gray-400">
      <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
        Contact
      </h1>
      <p className="text-base sm:text-lg mb-8 leading-relaxed">
        Open to interesting projects and collaborations. Reach out via email or
        connect on GitHub or LinkedIn.
      </p>
      <ul className="space-y-4 text-base sm:text-lg">
        <li>
          <span className="text-gray-500 block text-sm mb-1">Email</span>
          <a
            href={`mailto:${profileData.email}`}
            className="text-white hover:underline"
          >
            {profileData.email}
          </a>
        </li>
        <li>
          <span className="text-gray-500 block text-sm mb-1">Phone</span>
          <a href={`tel:${profileData.phone.replace(/\s/g, '')}`} className="text-white">
            {profileData.phone}
          </a>
        </li>
        <li>
          <span className="text-gray-500 block text-sm mb-1">Location</span>
          <span className="text-white">{profileData.location}</span>
        </li>
        <li>
          <span className="text-gray-500 block text-sm mb-1">GitHub</span>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            {profileData.github}
          </a>
        </li>
        <li>
          <span className="text-gray-500 block text-sm mb-1">LinkedIn</span>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            LinkedIn profile
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact

import { educationData, interests, profileData, skillsData } from '@/data'

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-gray-400">
      <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8">About</h1>

      <section className="mb-12">
        <h2 className="text-xl text-white font-medium mb-4">Bio</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          I'm Antonije Ljubiša, a Senior Frontend Engineer from Belgrade, Serbia.
          I work at SmartCat as Lead Frontend Engineer for Shopify and Senior
          Frontend Engineer on Content Lion, where I focus on architecture,
          engineering standards, and helping teams deliver high-quality
          software.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Over seven years in the industry I've grown from a junior full-stack
          role at CIPHER through full-stack work at Fat Cat Coders (Calendly,
          SAGE, Convertmore), leading frontend modernization at Valuer.ai, and
          browser extension development at Ocean ThinkIt. I studied at the
          University of Belgrade, Faculty of Philosophy (2013–2017).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl text-white font-medium mb-4">Education</h2>
        <p className="text-base sm:text-lg">
          <span className="text-white">{educationData.institution}</span>
          <br />
          {educationData.period}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl text-white font-medium mb-4">Skills</h2>
        <div className="space-y-6">
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className="text-white font-medium mb-2">{category.title}</h3>
              <p className="text-sm sm:text-base">{category.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl text-white font-medium mb-4">Interests</h2>
        <ul className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <li
              key={interest}
              className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white font-medium mb-4">Contact</h2>
        <ul className="space-y-2 text-base">
          <li>
            <a
              href={`mailto:${profileData.email}`}
              className="text-white hover:underline"
            >
              {profileData.email}
            </a>
          </li>
          <li>{profileData.phone}</li>
          <li>{profileData.location}</li>
          <li>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About

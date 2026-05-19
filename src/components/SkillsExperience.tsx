import { useSpring, animated } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { companiesData, skillsData } from '@/data'
import CompanyLogo from '@/components/CompanyLogo'

const sectionClass =
  'w-full px-4 sm:px-6 md:px-12 lg:px-[225px] py-16 sm:py-24 lg:py-28'

const panelClass =
  'h-full rounded-lg border border-[#3d6b5c] bg-[#1a4039] p-6 sm:p-8'

const SkillsExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const prefix = '/antonije/'

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 90, friction: 26 },
  }))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          api.start({ to: { opacity: 1, transform: 'translateY(0)' } })
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [isVisible, api])

  return (
    <section ref={containerRef} className={sectionClass}>
      <div className="mb-10 sm:mb-14 max-w-2xl">
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#c9a87c] font-medium mb-4">
          Craft & career
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] text-white font-medium leading-snug mb-4">
          Skills & experience
        </h2>
        <p className="text-base sm:text-lg text-[#a8c4bc] font-light leading-relaxed">
          The stack I reach for daily, and the teams and products where I have
          put it to work.
        </p>
      </div>

      <animated.div
        style={springs}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
      >
        {/* Skills column */}
        <div className={panelClass}>
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#3d6b5c]">
            <span className="block w-1 h-8 rounded-full bg-[#c9a87c]" aria-hidden />
            <h3 className="text-lg sm:text-xl text-[#e8dcc8] font-medium tracking-wide">
              Technical skills
            </h3>
          </div>

          <ul className="space-y-6">
            {skillsData.map((category) => (
              <li key={category.title}>
                <p className="text-xs uppercase tracking-[0.16em] text-[#c9a87c] mb-3 font-medium">
                  {category.title}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#e8dcc8] bg-[#234a42] border border-[#3d6b5c] px-3 py-1.5 rounded-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience column */}
        <div className={`${panelClass} flex flex-col`}>
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#3d6b5c] shrink-0">
            <span className="block w-1 h-8 rounded-full bg-[#c9a87c]" aria-hidden />
            <h3 className="text-lg sm:text-xl text-[#e8dcc8] font-medium tracking-wide">
              Experience
            </h3>
          </div>

          <ol className="list-none m-0 p-0 space-y-0 flex-1 lg:max-h-[520px] lg:overflow-y-auto lg:pr-2 experience-scroll">
            {companiesData.map((company, index) => (
              <li
                key={company.id}
                className={`group py-5 ${
                  index < companiesData.length - 1
                    ? 'border-b border-[#3d6b5c]'
                    : ''
                }`}
              >
                <div className="flex gap-4">
                  <CompanyLogo
                    logo={company.logo}
                    logoInitial={company.logoInitial}
                    name={company.name}
                    accentColor={company.colorScheme.accent}
                    size="md"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-[#c9a87c] tracking-wide mb-1.5">
                      {company.period}
                    </p>
                    <h4 className="text-base sm:text-lg text-white font-medium leading-snug">
                      {company.name}
                    </h4>
                    <p className="text-sm text-[#b8d4cf] font-light mt-0.5 mb-2">
                      {company.position}
                    </p>
                    <p className="text-sm text-[#8fa89f] font-light leading-relaxed line-clamp-2">
                      {company.shortDescription}
                    </p>
                    <Link
                      to={`${prefix}company/${company.id}`}
                      className="inline-flex items-center gap-1 mt-3 text-sm text-[#e8dcc8] hover:text-[#c9a87c] transition-colors no-underline group-hover:gap-2"
                    >
                      View role
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </animated.div>
    </section>
  )
}

export default SkillsExperience

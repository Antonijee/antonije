import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react'
import logo from '../assets/straw-hat-3.png'
import '../stars.scss'
import SplitText from './Title'

const Hero = () => {
  const [ready, setReady] = useState(false)

  const [textSpring, textApi] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 80, friction: 26 },
  }))

  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true)
      textApi.start({ to: { opacity: 1, transform: 'translateY(0)' } })
    }, 100)
    return () => clearTimeout(t)
  }, [textApi])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="stars stars--hero" aria-hidden="true">
        {[...Array(25)].map((_, i) => (
          <div className="star" key={i} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen w-full lg:w-1/2 px-4 sm:px-6 md:px-12 lg:pl-[225px] lg:pr-[60px] py-24 lg:py-0 font-light">
        <animated.div style={textSpring}>
          <div className="relative text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[28px] sm:leading-[36px] md:leading-[42px] lg:leading-[48px] text-gray-400">
            <img
              src={logo}
              alt=""
              className="absolute left-[-60px] sm:left-[-70px] lg:left-[-90px] top-[-10px] sm:top-[-12px] lg:top-[-15px] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            Hey, I&apos;m{' '}
            <span className="text-gray-100">
              {ready && (
                <SplitText
                  text="Antonije"
                  delay={150}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              )}
            </span>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[28px] sm:leading-[36px] md:leading-[42px] lg:leading-[48px] text-gray-400 mt-2 sm:mt-3">
            I&apos;m a{' '}
            <span className="text-gray-100">Senior Frontend Engineer</span> with
            full-stack experience.
          </p>

          <p className="text-sm sm:text-base lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[24px] mt-4 sm:mt-5 text-gray-400">
            Lead FE at <span className="text-gray-100">Shopify</span> via{' '}
            <span className="text-gray-100">SmartCat</span> · Belgrade, Serbia
          </p>

          <p className="mt-6 sm:mt-8 max-w-md text-base sm:text-lg text-[#9ebdb7] font-light leading-relaxed border-l-2 border-[#3d7a70] pl-5">
            I build thoughtful, maintainable frontends for products used at
            scale—from enterprise platforms to tools millions rely on.
          </p>
        </animated.div>
      </div>
    </section>
  )
}

export default Hero

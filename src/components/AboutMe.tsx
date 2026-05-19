import { useSpring, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import profile from '@/assets/luffy.jpg';

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [imageSprings, imageApi] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(-24px)' },
    config: { tension: 50, friction: 30 },
  }));

  const [textSprings, textApi] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(24px)' },
    config: { tension: 50, friction: 30 },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            imageApi.start({ to: { opacity: 1, transform: 'translateX(0)' } });
            textApi.start({
              to: { opacity: 1, transform: 'translateX(0)' },
              delay: 150,
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [isVisible, imageApi, textApi]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row w-full items-center gap-10 lg:gap-16 px-4 sm:px-6 md:px-12 lg:px-[225px] py-14 sm:py-20 lg:py-24 relative z-10"
    >
      <animated.div
        className="w-full lg:w-[42%] flex justify-center lg:justify-end shrink-0"
        style={imageSprings}
      >
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
          <div
            className="absolute top-3 left-3 w-full h-full rounded-sm bg-[#0d2824] border border-[#2d6a5f]"
            aria-hidden="true"
          />
          <img
            src={profile}
            alt="Antonije Ljubiša"
            className="relative w-full aspect-[4/5] object-cover rounded-sm border-2 border-[#2d6a5f]"
          />
        </div>
      </animated.div>

      <animated.div
        className="w-full lg:w-[58%] lg:pl-4"
        style={textSprings}
      >
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#c9a87c] font-medium mb-5">
          A bit about me
        </p>
        <div className="h-px w-full bg-[#2d6a5f] mb-8 sm:mb-10" />
        <p className="w-full text-base sm:text-lg md:text-xl lg:text-[22px] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-[#b8d4cf] font-light">
          I&apos;m a <span className="text-white">Senior Frontend Engineer</span> based in{' '}
          <span className="text-white">Belgrade, Serbia</span>. At{' '}
          <span className="text-white">SmartCat</span>, I lead frontend engineering for{' '}
          <span className="text-white">Shopify</span> and work as a senior engineer on{' '}
          <span className="text-white">Content Lion</span>—defining architecture, introducing
          best practices, and guiding teams toward solid engineering. Before that, I enhanced
          the Lean Library browser extension at{' '}
          <span className="text-white">Ocean ThinkIt</span>, modernized a React platform at{' '}
          <span className="text-white">Valuer.ai</span>, and shipped full-stack work at{' '}
          <span className="text-white">Fat Cat Coders</span> for clients like Calendly. My
          career started at <span className="text-white">CIPHER</span> as a junior full-stack
          developer. I hold a degree from the{' '}
          <span className="text-white">University of Belgrade, Faculty of Philosophy</span>.
        </p>
        <p className="text-[#9ebdb7] mt-6 sm:mt-8 text-base sm:text-lg lg:text-[20px] leading-relaxed font-light">
          Want to work together?{' '}
          <a
            href="mailto:antonije.ljubisa@gmail.com"
            className="text-white underline-offset-4 hover:underline"
          >
            Drop me a line.
          </a>
        </p>
      </animated.div>
    </div>
  );
};

export default AboutMe;

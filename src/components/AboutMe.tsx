import { useSpring, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import luffy from "@/assets/luffy.jpg"

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [imageSprings, imageApi] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(-50px) scale(0.9)' },
    config: { tension: 50, friction: 30 }
  }));

  const [textSprings, textApi] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(50px)' },
    config: { tension: 50, friction: 30 }
  }));

  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            imageApi.start({
              to: { opacity: 1, transform: 'translateX(0) scale(1)' },
            });
            textApi.start({
              to: { opacity: 1, transform: 'translateX(0)' },
              delay: 200
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible, imageApi, textApi]);

  return (
    <div ref={containerRef} className="flex w-full items-center px-[225px] py-[60px] relative z-10">
      <animated.div 
        className="w-2/5 flex justify-end ml-4"
        style={imageSprings}
      >
        <img src={luffy} alt="profile" className="w-[400px] h-[550px] object-cover rounded-lg" />
      </animated.div>
      <animated.div 
        className="w-1/2 pl-[40px] mt-10"
        style={textSprings}
      >
        <p className="header text-[12px] uppercase text-gray-400 leading-[36px] font-semibold">
          A bit about me
        </p>
        <p className="w-full text-[24px] leading-[36px] text-gray-400">
          Currently, I'm a <span className="text-white">Senior Frontend Developer</span> at{' '}
          <span className="text-white">SmartCat.io</span>, working on modern web applications 
          using React, TypeScript, and cutting-edge technologies. Previously, I enhanced 
          browser extensions at <span className="text-white">Ocean ThinkIt</span>, led frontend 
          modernization efforts at <span className="text-white">Valuer.ai</span>, and built 
          full-stack solutions at <span className="text-white">Fat Cat Coders</span> for clients 
          like Calendly. I specialize in React, TypeScript, and modern frontend architectures, 
          with experience across the entire development lifecycle—from feature development 
          and refactoring to testing and client collaboration.
        </p>
        <p className="text-gray-400 mt-6 text-[24px] leading-[36px]">
          Want to work together? <span className="text-white"><a href="mailto:antonije.ljubisa@gmail.com">Drop me a line.</a></span>
        </p>
      </animated.div>
    </div>
  );
};

export default AboutMe;

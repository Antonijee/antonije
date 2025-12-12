import logo from '../assets/straw-hat-3.png';
import '../stars.scss';
import SplitText from './Title';
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-[100vh] w-1/2 pl-[225px] pr-[60px] mt-[-3px] font-light">
        <div className="relative text-[32px] leading-[48px] text-gray-400">
          <img
            src={logo}
            alt="logo straw hat"
            className="absolute left-[-90px] top-[-15px] w-20 h-20 rotate-[-0deg]"
          />
          Hey, I'm <span className="text-gray-100">
          <SplitText
              text="Antonije"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
                      </span>
        </div>
        <p className="text-[32px] leading-[48px] text-gray-400">
          I'm a{' '}
          <span className="text-gray-100">Senior Front-End Engineer </span>
          with full stack knowledge.
        </p>
        <p className="text-[16px] leading-[24px] mt-[20px] text-gray-400">
          Currently working at{' '}
          <span className="text-gray-100">SmartCat</span>
        </p>
      </div>
      <div className="stars">
        {[...Array(25)].map((_, i) => (
          <div className="star" key={i}></div>
        ))}
      </div>
    </>
  );
};

export default Hero;

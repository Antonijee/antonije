import '../stars.scss';
import logo from '../assets/straw-hat-3.png';

const Homepage = () => {
  return (
    <section>
      <div className="flex flex-col justify-center h-[100vh] w-1/2 pl-[225px] pr-[60px] mt-[-3px] font-light">
        <p className="relative text-[32px] leading-[48px] text-gray-400">
          <img
            src={logo}
            alt="logo straw hat"
            className="absolute left-[-90px] top-[-15px] w-20 h-20 rotate-[-0deg]"
          />
          Hey, I'm <span className="text-gray-100">Antonije</span>
        </p>
        <p className="text-[32px] leading-[48px] text-gray-400">
          I'm a{' '}
          <span className="text-gray-100">Senior Front-End Engineer </span>
          with full stack knowledge.
        </p>
        <p className="text-[16px] leading-[24px] mt-[20px] text-gray-400">
          Currently working at{' '}
          <span className="text-gray-100">Ocean ThinkIT</span>
        </p>
      </div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </section>
  );
};

export default Homepage;

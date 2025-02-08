import React from 'react';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <animated.section style={fadeIn} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Experience the Extraordinary</h2>
        <p className="text-xl md:text-2xl mb-8">Discover our collection of visually stunning products</p>
        <a href="#" className="btn btn-primary">Shop Now</a>
      </div>
    </animated.section>
  );
};

export default Hero;

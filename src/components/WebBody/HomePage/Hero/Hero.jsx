import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';

const hero = '/images/hero.webp';

const Hero = () => {
  const [text1Color, setText1Color] = useState('#ffffff');

  const generateColor = () => {
    const characters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const newColorFind = () => {
    let newColor;
    do {
      newColor = generateColor();
    } while (newColor === text1Color);
    setText1Color(newColor);
  };

  useEffect(() => {
    const intervalId = setInterval(newColorFind, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden md:py-20 px-9 py-10 md:px-10">
      <Helmet>
        <link rel="preload" as="image" href={hero} />

      </Helmet>
      
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width="1920"
        height="1080"
      />
      <div className="absolute h inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 items-center md:px-10">
        <div className="md:w-1/2 text-sm">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl">
            <span
              className="text1 libre-baskerville-regular-italic mb-9"
              style={{ color: text1Color }}
            >
              Care2 Training Consultancy
            </span>
            <br />
            Your Partner in
            <br />
            Achieving Goals
          </h1>
          <p className="text-white font1 text-[18px] mt-10">
            At Care2 Training Consultancy, we are committed to empowering individuals and
            organizations with the skills and knowledge they need to excel. Our tailored training
            programs and expert guidance help you unlock your true potential and achieve your
            dreams with confidence.
          </p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="btn btn-info w-28 mt-16">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

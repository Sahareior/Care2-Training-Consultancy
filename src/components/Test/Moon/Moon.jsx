import React from 'react';
import './Moon.css';
import { Link } from 'react-scroll';

const Moon = () => {
    return (
        <div className="background-container">
            <img className='image w-20' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="Moon" />
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>

            {/* Text content container */}
            <div className="text-content w-96 flex flex-col mx-auto justify-center  items-center gap-5">
                <h1 className='neon-heading text-center'>
                    <span className='text1 neon-text'>
                        Neon Net
                    </span>
                    <br />
                    Your Partner for
                    <br />
                    Expert SEO Support
                </h1>
                <p className='text-description text-white text-center text-[16px]'>
                    Welcome to your pathway to business success. Boost your online presence with our expert SEO services,
                    including website and YouTube SEO, and comprehensive social media marketing support.
                    At Neon Net, we specialize in enhancing your digital footprint with strategies tailored to improve
                    your search engine rankings and maximize your online visibility.
                </p>
                <Link
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button className='glow-button btn flex justify-center items-center'>Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Moon;

import React, { useEffect, useRef, useState } from 'react';
import './Test.css';
import { Link } from 'react-scroll';

const Test = () => {
    const [weather, setWeather] = useState('');
    const canvasRef = useRef(null);
    let c, w, h;
    let particles = [];

    useEffect(() => {
        setWeather('rain');

        const canvas = canvasRef.current;
        c = init(canvas);
        w = canvas.width;
        h = canvas.height;

        const maxParticles = 70;

        class Raindrop {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.length = Math.random() * 10 + 10;
                this.speed = Math.random() * 1 + 1;
                this.wind = Math.random() * 2 - 0.5;
                this.gravity = 0.1;
                this.opacity = Math.random() * 0.1 + 0.5;
            }
            fall() {
                this.y += this.speed;
                this.x += this.wind;
                this.speed += this.gravity;
                if (this.y > h) {
                    this.y = -this.length;
                    this.x = Math.random() * w;
                    this.speed = Math.random() * 3 + 3;
                }
            }
        }

        function draw() {
            c.clearRect(0, 0, w, h);
            c.beginPath();
            particles.forEach(p => {
                p.fall();
                c.moveTo(p.x, p.y);
                c.lineTo(p.x, p.y + p.length);
            });
            c.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            c.lineWidth = 2;
            c.stroke();
        }

        function init(canvas) {
            const ctx = canvas.getContext("2d");
            const width = (canvas.width = window.innerWidth);
            const height = (canvas.height = window.innerHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, width, height);
            return ctx;
        }

        function loop() {
            draw();
            window.requestAnimationFrame(loop);
        }

        window.addEventListener('resize', () => {
            w = canvasRef.current.width = window.innerWidth;
            h = canvasRef.current.height = window.innerHeight;
            loop();
        });

        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Raindrop());
        }

        loop();
    }, [weather]);

    const rainImg = "https://img.freepik.com/free-photo/man-silhouette-empty-road_23-2150914466.jpg?semt=ais_hybrid";
    const backgroundImage = weather === 'rain' ? rainImg : '';

    return (
  
            <div className='hero min-h-screen overflow-hidden ' style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='login-container' >
            <h1
  className={`${
     weather === 'snow' ? 'right-2 p-5' : weather === 'rain' ? 'md:left-[100px] left-4' : ''
  } text-white font-bold absolute top-24 text-7xl`}
>
<div className={`${weather === 'snow'&& 'text-center '} md:w-1/2 text mt-24 text-sm`}>
          <h1 className='text-white font-extrabold text-5xl'>
            <span className='text1 libre-baskerville-regular-italic' >
             Neon Net
            </span>
            <br />
            Your Partner for
            <br />
            Expert SEO Support
          </h1>
          <p className='text-white font1 text-[18px] mt-10'>
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
            <button className='btn btn-info w-28 mt-16'>Contact</button>
          </Link>
        </div>
</h1>

            </div>
            <canvas className='' ref={canvasRef} id="canvas"></canvas>
        </div>
      
  
    );
};

export default Test;
